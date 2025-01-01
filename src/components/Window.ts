import { WindowElement } from "../ui";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            WINDOW: React.PropsWithChildren;
        }
    }
}

export default () => {
    const element = new WindowElement();

    return {
        element,
    };
};
