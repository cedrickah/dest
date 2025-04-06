import React from "react";
import DesktopRenderer from "../reconciler";
import View from "../components/View";
import Window from "../components/Window";

const AppRegistry = {
    registerRootComponent: (component: React.ComponentType) => {
        const window = Window();
        window.element
            .getBaseElement()
            .setContentSize({ width: 400, height: 250 });

        const container = View({});
        container.element.getBaseElement().setStyle({ flexDirection: "row" });
        window.element
            .getBaseElement()
            .setContentView(container.element.getBaseElement());
        window.element.getBaseElement().center();
        window.element.getBaseElement().activate();

        let root = container.element.getBaseElement()._reactRootContainer;

        if (!root) {
            const childCount = container.element.getBaseElement().childCount();
            for (let i = 0; i < childCount; i += 1) {
                container.element
                    .getBaseElement()
                    .removeChildView(
                        container.element.getBaseElement().childAt(0)
                    );
            }
            const newRoot = DesktopRenderer.createContainer(container);
            root = container.element.getBaseElement()._reactRootContainer =
                newRoot;
        }

        return DesktopRenderer.updateContainer(component, root, null);
    },
};

export default AppRegistry;
