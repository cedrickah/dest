import React, { useEffect } from "react";
import { View, Button } from "../../../build";

function App() {
    function fetchData() {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json())
            .then((data) => {
                console.log("Data: ", data);
            })
            .catch((error) => {
                console.log("Error: ", error);
        });
    }

    return (
        <View
            style={{
                height: "50%",
                width: "100%",
            }}
        >
            <Button onPress={() => fetchData()} title="Fetch data" />
        </View>
    );
}

export default App;
