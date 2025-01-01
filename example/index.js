import React from "react";
import { AppRegistry } from "../dist";
import Example from "./App.js";
const gui = require("gui");

AppRegistry.registerRootComponent(<Example />);

if (!process.versions.yode) {
    gui.MessageLoop.run();
    process.exit(0);
}
