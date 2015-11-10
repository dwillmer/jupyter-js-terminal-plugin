// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

// import {
//   TerminalWidget
// } from 'jupyter-js-terminal';

import {
  Tab
} from 'phosphor-tabs';


var MENU = {
  items: [
    {
      location: ["New", "Terminal"],
      command: "jupyter.new.terminal"
    }
  ]
};

export
function menuLoader(extension:any): Promise<any> {
  return Promise.resolve(MENU);
}


export
function uiLoader(extension: any): Promise<any> {
  // var ui = {
  //   items: [new TerminalWidget()],
  //   tabs: [new Tab('Terminal')]
  // };
  return Promise.resolve(void 0);
}
