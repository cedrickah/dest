import { BaseElement } from "../ui";

export interface Component {
    element: BaseElement;
    parent: Component;
    updateProps: (payload: object) => void;
    appendChild?: (child: Component) => void;
    removeChild?: (child: Component) => void;
    insertChild?: (child: Component, beforeChild: Component) => void;
}
