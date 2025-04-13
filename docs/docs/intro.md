---
sidebar_position: 1
---

# Quick start

Create desktop applications with React Native components, on all platforms.

# Example

Here's a simple example in Dest:

```javascript
import React, { Component } from "react";

import { AppRegistry, View, Loop } from "dest";

class App extends Component {
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
                    title="Click me!"
                />
            </View>
        );
    }
}

AppRegistry.registerRootComponent(<App />);

Loop();
```
