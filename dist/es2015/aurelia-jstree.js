import { PLATFORM } from "aurelia-pal";
export function configure(aurelia) {
    aurelia.globalResources([
        PLATFORM.moduleName("./au-js-tree")
    ]);
}
export * from "./au-js-tree";
