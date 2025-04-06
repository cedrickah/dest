import React, { Component } from "react";

import { View, Button } from "../build";

class App extends Component {
    state = {
        test: "test",
        a: true,
        mouseState: "idle",
        x: 50,
        y: 50,
    };
    render() {
        return (
            <View
                style={{
                    height: "50%",
                    width: "100%",
                }}
            >
                <Button
                    onPress={() => console.log("Hello world!")}
                    title="Say hello"
                />
            </View>
        );
    }
}

export default App;
