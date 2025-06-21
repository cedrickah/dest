import React, { useEffect } from "react";
import { View, Button } from "../../../build";

function App() {
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        console.log(count);
    });
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
