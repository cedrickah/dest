import { Component } from "../types";
import View from "../components/View";
import pkg from "lodash";
import Button from "../components/Button";
const { uniq } = pkg;
import Reconciler from "react-reconciler";

const DEBUG = false;

const DesktopRenderer = Reconciler({
    appendInitialChild(parentInstance: Component, child: Component) {
        if (DEBUG) console.log("appendInitialChild");
        insertChild(parentInstance, child);
    },

    createInstance(type: string, props: object) {
        if (DEBUG) console.log("createInstance");
        const COMPONENTS = {
            BUTTON: () => Button(props),
            VIEW: () => View(props),
            default: undefined,
        };
        return (COMPONENTS as any)[type]() || COMPONENTS.default;
    },

    createTextInstance(text: string) {
        if (DEBUG) console.log("createTextInstance");
        return { text, type: "text" };
    },

    finalizeInitialChildren() {
        if (DEBUG) console.log("finalizeInitialChildren");
        return false;
    },

    getPublicInstance(inst: any) {
        if (DEBUG) console.log("getPublicInstance");
        return inst;
    },

    prepareForCommit() {
        if (DEBUG) console.log("prepareForCommit");
    },

    clearContainer() {
        if (DEBUG) console.log("clearContainer");
    },

    prepareUpdate(
        wordElement: any,
        type: string,
        oldProps: { [key: string]: any },
        newProps: { [key: string]: any }
    ) {
        if (DEBUG) console.log("prepareUpdate");
        const propKeys = uniq(
            Object.keys(newProps).concat(Object.keys(oldProps))
        );

        const diff: { [key: string]: any } = {};
        for (let key of propKeys) {
            if (oldProps[key] !== newProps[key]) {
                diff[key] = newProps[key];
            }
        }

        return diff;
    },

    resetAfterCommit(hostContext: Window) {
        if (DEBUG) console.log("resetAfterCommit");
    },

    resetTextContent() {
        if (DEBUG) console.log("resetTextContent");
    },

    getRootHostContext() {
        if (DEBUG) console.log("getRootHostContext");
        return {};
    },

    getChildHostContext() {
        if (DEBUG) console.log("getChildHostContext");
        return {};
    },

    shouldSetTextContent() {
        if (DEBUG) console.log("shouldSetTextContent");
        return false;
    },

    now: () => {},

    useSyncScheduling: true,

    appendChild(parentInstance: Component, child: Component) {
        if (DEBUG) console.log("appendChild");
        insertChild(parentInstance, child);
    },

    appendChildToContainer(parentInstance: Component, child: Component) {
        if (DEBUG) console.log("appendChildToContainer");
        insertChild(parentInstance, child);
    },

    removeChild(parentInstance: Component, child: Component) {
        if (DEBUG) console.log("removeChild");
        removeChild(parentInstance, child);
    },

    removeChildFromContainer(parentInstance: Component, child: Component) {
        if (DEBUG) console.log("removeChildFromContainer");
        removeChild(parentInstance, child);
    },

    insertBefore(
        parentInstance: Component,
        child: Component,
        beforeChild: Component
    ) {
        if (DEBUG) console.log("insertBefore");
        insertChild(parentInstance, child, beforeChild);
    },

    commitUpdate(instance: Component, updatePayload: object) {
        if (DEBUG) console.log("commitUpdate");
        instance.updateProps(updatePayload);
    },

    commitMount() {
        if (DEBUG) console.log("commitMount");
    },

    commitTextUpdate(
        textInstance: Component,
        oldText: string,
        newText: string
    ) {
        if (DEBUG) console.log("commitTextUpdate");
        textInstance.text = newText;
        textInstance.parent!.updateText();
    },

    supportsMutation: true,
    supportsPersistence: false,
});

const removeChild = (container: Component, child: Component) => {
    if (container.removeChild) {
        container.removeChild(child);
    } else {
        throw new Error(
            `Can't remove child from ${container.constructor.name}`
        );
    }
};

const insertChild = (
    container: Component,
    child: Component,
    beforeChild?: Component
) => {
    const operation = beforeChild ? "insertChild" : "appendChild";
    const params = beforeChild ? [child, beforeChild] : [child];
    if (container[operation]) {
        setParent(container, child);
        //@ts-ignore
        container[operation](...params);
    } else {
        throw new Error(`Can't append child to ${container.constructor.name}`);
    }
};

const setParent = (container: Component, child: Component) => {
    if (typeof child == "object") child.parent = container;
};

export default DesktopRenderer;
