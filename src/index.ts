// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  DisposableDelegate
} from 'phosphor-disposable';

import {
  Message
} from 'phosphor-messaging';

import {
  Widget
} from 'phosphor-widget';

import {
  Terminal, ITerminalConfig
} from 'term.js';


class TerminalWidget extends Widget {
  static nterms = 0;

  static createTerminal(config?: ITerminalConfig): TerminalWidget {
    TerminalWidget.nterms +=1;
    var wsUrl = `ws://${ADDRESS}/terminals/websocket/${TerminalWidget.nterms}`;
    var term = new TerminalWidget(wsUrl, config);
    return term;
  }

  constructor(wsUrl: string, config?: ITerminalConfig) {
    super();
    this.addClass('TerminalWidget');
    this._ws = new WebSocket(wsUrl);
    this._config = config || {useStyle: true};
    this._term = new Terminal(this._config);
    this._term.open(this.node);
    this._term.on('data', (data: string) => {
      this._ws.send(JSON.stringify(['stdin', data]));
    });

    this._ws.onmessage = (event: MessageEvent) => {
      var jsonMsg = JSON.parse(event.data);
      switch (jsonMsg[0]) {
      case 'stdout':
        this._term.write(jsonMsg[1]);
        break;
      case 'disconnect':
        this._term.write('\r\n\r\n[Finished... Term Session]\r\n');
        break;
      }
    };
  }

  dispose(): void {
    this._term.destroy();
    this._ws = null;
    this._term = null;
    super.dispose();
  }

  protected onAfterAttach(msg: Message): void {
    this._snapTermSizing();
  }

  protected onResize(msg: ResizeMessage): void {
    if (!this._rowHeight) { this._rowHeight = 1; }
    if (!this._colWidth) { this._colWidth = 1; }
    var rows = Math.max(2, Math.round(msg.height / this._rowHeight) - 1);
    var cols = Math.max(3, Math.round(msg.width / this._colWidth) - 1);
    this._term.resize(cols, rows);
  }

  private _snapTermSizing(): void {
    var dummyTerm = document.createElement('div');
    dummyTerm.style.visibility = 'hidden';
    dummyTerm.innerHTML = (
      '01234567890123456789' +
      '01234567890123456789' +
      '01234567890123456789' +
      '01234567890123456789'
    );

    this._term.element.appendChild(dummyTerm);
    this._rowHeight = dummyTerm.offsetHeight;
    this._colWidth = dummyTerm.offsetWidth / 80;
    this._term.element.removeChild(dummyTerm);
  }

  private _term: any;
  private _ws: WebSocket;
  private _rowHeight: number;
  private _colWidth: number;
  private _config: ITerminalConfig;
}
