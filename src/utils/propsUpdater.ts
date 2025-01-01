const propsUpdater =
    (...updateMaps: any[]) =>
    (changes: object) =>
        updateMaps.forEach((updateMap) => {
            if (!Array.isArray(updateMap)) {
                return Object.entries(updateMap).forEach(
                    ([prop, updateFn]: any) => {
                        if (prop in changes) {
                            updateFn((changes as any)[prop]);
                        }
                    }
                );
            }

            const mutableObject = updateMap[0];
            updateMap.slice(1).forEach((p) => {
                if (typeof p === "object") {
                    Object.entries(p).forEach(([prop, objectKey]: any) => {
                        if (prop in changes) {
                            mutableObject[objectKey] = (changes as any)[prop];
                        }
                    });
                } else {
                    if (p in changes) {
                        mutableObject[p] = (changes as any)[p];
                    }
                }
            });
        });

export default propsUpdater;
