/// <reference types="jstree" />
/// <reference types="jquery" />
export declare class AuJsTree {
    private element;
    settings: JSTreeStaticDefaults;
    data: any;
    nodeMoved: (event: JQueryEventObject, data: JsTreeNodeMovedData) => void;
    renderHost: HTMLDivElement;
    instance: JSTree;
    constructor(element: Element);
    attached(): void;
    settingsChanged(newValue: JSTreeStaticDefaults): void;
    dataChanged(newValue: any): void;
    private triggerEvent(eventName, options);
}
export interface JsTreeSelectionChangedData {
    node: JsTreeNode;
}
export interface JsTreeNodeMovedData {
    node: JsTreeNode;
    parent: string;
    position: number;
    old_parent: string;
    old_position: number;
    is_multi: boolean;
    old_instance: JSTree;
    new_instance: JSTree;
}
export interface JsTreeNode {
}
export interface JsTreeJqEvent extends JQueryEventObject {
}
