// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  IMenuExtension
} from 'phosphide';

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
function menuLoader(): Promise<IMenuExtension> {
  return Promise.resolve(MENU);
}
