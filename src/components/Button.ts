import propChecker from "../utils/propChecker";
import { Container } from "./Container";
import * as PropTypes from "prop-types";
import propsUpdater from "../utils/propsUpdater";
import { ButtonElement } from "../ui";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            BUTTON: React.PropsWithChildren<Props>;
        }
    }
}

export interface Props {
    style?: React.CSSProperties;
    onPress?: () => void;
    title?: string;
}

export default (p: Props) => {
    const propTypes = {
        style: PropTypes.object,
        onPress: PropTypes.func,
        title: PropTypes.string,
    };
    const defaultProps = {
        style: {},
        onPress: () => {},
        title: "Button",
    };

    const element = new ButtonElement();

    let props = { ...p };
    props = propChecker(props, propTypes, defaultProps, "TextInput");

    const handlers = {
        onPress: props.onPress,
    };

    element.onClick(() => {
        if (handlers.onPress) {
            handlers.onPress();
        }
    });

    const containerProps = Container(
        (child) => {
            if (child.type === "text")
                throw new Error(
                    "Button takes no children. If you are trying to set the title, use the title prop."
                );
        },
        (child) => {},
        (child, i) => {}
    );

    const updateProps = propsUpdater([handlers, "onPress"], {
        style: (style: React.CSSProperties) => {
            element.getElement().setStyle(style);
        },
        title: (title: string) => {
            element.getElement().setTitle(title);
        },
    });

    updateProps(props);

    return {
        ...containerProps,
        element,
        updateProps,
    };
};
