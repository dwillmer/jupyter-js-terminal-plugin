// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';
var MENU = {
    location: ["New", "Terminal"],
    command: "jupyter.new.terminal"
};
/**
 * Plugin loader function for the menu.
 */
function createMenuContribution() {
    return {
        item: MENU,
        isDisposed: false,
        dispose: function () { }
    };
}
exports.createMenuContribution = createMenuContribution;
//# sourceMappingURL=index.js.map