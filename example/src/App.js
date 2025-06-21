import React, { useEffect } from "react";
import { View, Button } from "../../build";

// var date = require("bindings")("date");

function App() {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        // console.log("Today is: " + date.getdate());
        console.log(count);
        fetch("https://jsonplaceholder.typicode.com/posts/1") // replace with your actual API
            .then((res) => res.json())
            .then((data) => {
                console.log("Got data:", data);
                // optional: update state
            })
            .catch((err) => {
                console.error("Fetch error:", err);
            });
    }, []);
    return (
        <View
            style={{
                height: "50%",
                width: "100%",
            }}
        >
            <Button onPress={() => setCount(count + 1)} title="Increase" />
        </View>
    );
}

export default App;
