import React from "react";
import { AppRegistry } from "../build";
import App from "./App.js";
const gui = require("gui");

AppRegistry.registerRootComponent(<App />);

if (!process.versions.yode) {
    gui.MessageLoop.run();
    process.exit(0);
}
