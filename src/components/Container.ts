export const Container = (
    addChild: (child: any) => void,
    deleteChild: (child: any) => void,
    inChild: (child: any, i: number, beforeChild: any) => void = addChild
) => {
    const appendChild = (child: any) => {
        addChild(child);
    };

    const insertChild = (child: any, beforeChild: any) => {
        const count = beforeChild.getBaseElement().childCount();
        const targetEle = beforeChild.element;

        for (let i = 0; i < count; i += 1) {
            const ele = beforeChild.childAt(i);

            if (targetEle === ele) {
                inChild(child, i, beforeChild);
                return;
            }
        }
    };

    const removeChild = (child: any) => {
        deleteChild(child);
    };

    return {
        appendChild,
        insertChild,
        removeChild,
    };
};
