// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

var MENU = {
  items: [
    {
      location: ["New", "Terminal"],
      command: "jupyter.new.terminal"
    }
  ]
};

export function menuLoader(extension:any): Promise<any> {
  return Promise.resolve(MENU);
}
