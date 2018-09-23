var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, inject, customElement } from "aurelia-framework";
import { DOM } from 'aurelia-pal';
import * as $ from "jquery";
var AuJsTree = /** @class */ (function () {
    function AuJsTree(element) {
        this.element = element;
    }
    AuJsTree.prototype.attached = function () {
        var _this = this;
        var settings = Object.assign({}, this.settings);
        if (this.data) {
            settings.core.data = this.data;
        }
        this.instance = $(this.renderHost).jstree(settings);
        var that = this;
        this.instance.on("select_node.jstree", function (e, data) {
            that.triggerEvent('selectionChanged', data);
        });
        this.instance.on("move_node.jstree", function (e, data) { return _this.nodeMoved(e, data); });
    };
    AuJsTree.prototype.settingsChanged = function (newValue) {
        if (this.instance) {
            $(this.renderHost).jstree(true).settings = newValue;
            $(this.renderHost).jstree(true).refresh(false, false);
        }
    };
    AuJsTree.prototype.dataChanged = function (newValue) {
        if (this.instance) {
            console.log($(this.renderHost).jstree(true).settings.core.data);
            console.log(newValue);
            $(this.renderHost).jstree(true).settings.core.data = newValue;
            $(this.renderHost).jstree(true).refresh(false, false);
        }
    };
    AuJsTree.prototype.triggerEvent = function (eventName, options) {
        var e = DOM.createCustomEvent(eventName, { detail: options, bubbles: true });
        this.element.dispatchEvent(e);
    };
    __decorate([
        bindable()
    ], AuJsTree.prototype, "settings", void 0);
    __decorate([
        bindable()
    ], AuJsTree.prototype, "data", void 0);
    __decorate([
        bindable()
    ], AuJsTree.prototype, "nodeMoved", void 0);
    AuJsTree = __decorate([
        customElement("au-js-tree"),
        inject(Element)
    ], AuJsTree);
    return AuJsTree;
}());
export { AuJsTree };
