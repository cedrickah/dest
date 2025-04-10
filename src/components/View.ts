import { Container } from "./Container";
import * as PropTypes from "prop-types";
import { ViewElement } from "../ui";
import { propChecker, propsUpdater } from "../utils/props";

interface Point {
    x: number;
    y: number;
}

interface MouseMoveEvent {
    point: Point;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            VIEW: React.PropsWithChildren<Props>;
        }
    }
}

export interface Props {
    style?: React.CSSProperties;
    onMouseMove?: (event: MouseMoveEvent) => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export default (p: Props) => {
    const propTypes = {
        style: PropTypes.object,
        onMouseMove: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
    };
    const defaultProps = {
        style: {},
        onMouseMove: (event: MouseMoveEvent) => {},
        onMouseEnter: () => {},
        onMouseLeave: () => {},
    };

    const element = new ViewElement();

    let props = { ...p };
    props = propChecker(props, propTypes, defaultProps, "View");

    const handlers = {
        onMouseMove: props.onMouseMove,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
    };

    const containerProps = Container(
        (child) => {
            element
                .getBaseElement()
                .addChildView(child.element.getBaseElement());
        },
        (child) => {
            element
                .getBaseElement()
                .removeChildView(child.element.getBaseElement());
        },
        (child) => {
            element
                .getBaseElement()
                .addChildView(child.element.getBaseElement());
        }
    );

    const updateProps = propsUpdater(
        [handlers, "onMouseEnter", "onMouseMove", "onMouseLeave"],
        {
            style: (style: React.CSSProperties) => {
                element.getBaseElement().setStyle(style);
            },
        }
    );

    updateProps(props);

    return {
        ...containerProps,
        element,
        updateProps,
    };
};
