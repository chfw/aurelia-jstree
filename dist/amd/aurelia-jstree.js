define(["require", "exports", "aurelia-pal", "./au-js-tree"], function (require, exports, aurelia_pal_1, au_js_tree_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.globalResources([
            aurelia_pal_1.PLATFORM.moduleName("./au-js-tree")
        ]);
    }
    exports.configure = configure;
    __export(au_js_tree_1);
});
