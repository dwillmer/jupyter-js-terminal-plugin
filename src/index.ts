// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  IContribution
} from 'phosphor-plugins';

import {
  TerminalWidget
} from 'jupyter-js-terminal';


var MENU = {
  location: ["New", "Terminal"],
  command: "jupyter.new.terminal"
};


let contribProto: IContribution = {
  item: null,
  isDisposed: false,
  dispose: function() {
    this.isDisposed = true;
    this.item = null;
  },
};


/**
 * The loader function providing a menu extension.
 */
export
function createMenuContribution(): IContribution {
  let contrib = Object.create(contribProto);
  contrib.item = MENU;
  return contrib;
}


/**
 * The loader function providing a UI extension.
 */
export
function createUIContribution(): IContribution {
  let contrib = Object.create(contribProto);
  contrib.item = new TerminalWidget();
  return contrib;
};
