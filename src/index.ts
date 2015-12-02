// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  IMenuExtension
} from 'phosphide';

import {
  Tab
} from 'phosphor-tabs';

var MENU = [
  {
    location: ["New", "Terminal"],
    command: "jupyter.new.terminal"
  }
];

/**
 * Plugin loader function for the menu.
 */
export
function menuLoader(): any {
  return {
    item: MENU,
    isDisposed: false,
    dispose: () => {}
  };
}
