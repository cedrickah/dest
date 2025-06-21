import React, { useEffect } from "react";
import { View, Button } from "../../../build";

var date = require("bindings")("date");

function App() {
    const [count, setCount] = React.useState(0);

    const getDate = () => {
        console.log("Today is: " + date.getdate());
    }
    return (
        <View
            style={{
                height: "50%",
                width: "100%",
            }}
        >
            <Button onPress={getDate} title="Get Date" />
        </View>
    );
}

export default App;
