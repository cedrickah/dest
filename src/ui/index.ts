import gui from "gui";

interface Size {
    width: number;
    height: number;
}

export abstract class BaseElement {
    element: any;

    getElement() {
        return this.element;
    }
}

export class WindowElement extends BaseElement {
    constructor() {
        super();
        this.element = gui.Window.create({});
    }

    desktopSize(): Size {
        return this.element.getContentSize();
    }

    getElement() {
        return this.element;
    }
}

export class ViewElement extends BaseElement {
    constructor() {
        super();
        this.element = gui.Container.create();
    }
}

export class ButtonElement extends BaseElement {
    constructor() {
        super();
        this.element = gui.Button.create({
            title: "",
            type: "normal",
        });
    }

    onClick(func: () => void) {
        this.element["onClick"].connect(func);
    }
}
