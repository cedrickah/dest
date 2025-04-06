import gui from "gui";

interface Size {
    width: number;
    height: number;
}

export abstract class BaseElement {
    baseElement: any;

    getBaseElement() {
        return this.baseElement;
    }
}

export class WindowElement extends BaseElement {
    constructor() {
        super();
        this.baseElement = gui.Window.create({});
    }

    desktopSize(): Size {
        return this.baseElement.getContentSize();
    }
}

export class ViewElement extends BaseElement {
    constructor() {
        super();
        this.baseElement = gui.Container.create();
    }
}

export class ButtonElement extends BaseElement {
    constructor() {
        super();
        this.baseElement = gui.Button.create({
            title: "",
            type: "normal",
        });
    }

    onClick(func: () => void) {
        this.baseElement["onClick"].connect(func);
    }
}
