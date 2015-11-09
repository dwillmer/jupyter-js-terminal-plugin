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
function menuLoader(extension) {
    return Promise.resolve(MENU);
}
exports.menuLoader = menuLoader;
//# sourceMappingURL=index.js.map