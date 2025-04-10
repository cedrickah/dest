import gui from "gui";

export const Loop = () => {
    if (!process.versions.yode) {
        gui.MessageLoop.run();
        process.exit(0);
    }
};
