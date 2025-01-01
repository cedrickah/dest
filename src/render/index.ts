import React from "react";
import DesktopRenderer from "../reconciler";
import View from "../components/View";
import Window from "../components/Window";

const AppRegistry = {
    registerRootComponent: (component: React.ComponentType) => {
        const window = Window();
        window.element.getElement().setContentSize({ width: 400, height: 250 });

        const container = View({});
        container.element.getElement().setStyle({ flexDirection: "row" });
        window.element
            .getElement()
            .setContentView(container.element.getElement());
        window.element.getElement().center();
        window.element.getElement().activate();

        let root = container.element.getElement()._reactRootContainer;

        if (!root) {
            const childCount = container.element.getElement().childCount();
            for (let i = 0; i < childCount; i += 1) {
                container.element
                    .getElement()
                    .removeChildView(container.element.getElement().childAt(0));
            }
            const newRoot = DesktopRenderer.createContainer(container);
            root = container.element.getElement()._reactRootContainer = newRoot;
        }

        return DesktopRenderer.updateContainer(component, root, null);
    },
};

export default AppRegistry;
