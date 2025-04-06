import propChecker from "../utils/propChecker";
import { Container } from "./Container";
import * as PropTypes from "prop-types";
import propsUpdater from "../utils/propsUpdater";
import { ViewElement } from "../ui";

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

type a = {
    text?: string;
} & {
    text: string;
};

export interface Props {
    style?: React.CSSProperties;
    onResponderGrant?: () => void;
    onResponderRelease?: () => void;
    onMouseMove?: (event: MouseMoveEvent) => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export default (p: Props) => {
    const propTypes = {
        style: PropTypes.object,
        onResponderGrant: PropTypes.func,
        onResponderRelease: PropTypes.func,
        onMouseMove: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
    };
    const defaultProps = {
        style: {},
        onResponderGrant: () => {},
        onResponderRelease: () => {},
        onMouseMove: (event: MouseMoveEvent) => {},
        onMouseEnter: () => {},
        onMouseLeave: () => {},
    };

    const element = new ViewElement();

    let props = { ...p };
    props = propChecker(props, propTypes, defaultProps, "View");

    const handlers = {
        onResponderGrant: props.onResponderGrant,
        onResponderRelease: props.onResponderRelease,
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
        [
            handlers,
            "onResponderGrant",
            "onResponderRelease",
            "onMouseEnter",
            "onMouseLeave",
        ],
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
