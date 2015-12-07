// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';
var jupyter_js_terminal_1 = require('jupyter-js-terminal');
var MENU = {
    location: ["New", "Terminal"],
    command: "jupyter.new.terminal"
};
var contribProto = {
    item: null,
    isDisposed: false,
    dispose: function () {
        this.isDisposed = true;
        this.item = null;
    },
};
/**
 * The loader function providing a menu extension.
 */
function createMenuContribution() {
    var contrib = Object.create(contribProto);
    contrib.item = MENU;
    return contrib;
}
exports.createMenuContribution = createMenuContribution;
/**
 * The loader function providing a UI extension.
 */
function createUIContribution() {
    var contrib = Object.create(contribProto);
    contrib.item = new jupyter_js_terminal_1.TerminalWidget();
    return contrib;
}
exports.createUIContribution = createUIContribution;
;
//# sourceMappingURL=index.js.map