import React, { useState } from "react";
import { Text, View, Alert, Button } from "react-native";
import { styles } from "../styles";


const MyPrompt = () => {
    const [name, setName] = useState('');

    // const clickMe = () => {
    //     Alert.alert("Welcome", "Please Enter Your name", [
    //       {
    //         text: "Submit",
    //         onPress: (text) => setName((prev) => (prev = text)),
    //       },
    //       {
    //         text: "Cancel",
    //         onPress: () => console.log("Cancel is pressed"),
    //       },
    //     ]);
    // }

    const clickMe = () => {
        Alert.prompt("Welcome", "Please Enter Your name", [
          {
            text: "Submit",
            onPress: (text) => setName((prev) => (prev = text)),
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel is pressed"),
          },
        ],"plain-text", "Name");
    }

    return (
      <View style={styles.container2}>
        <Text style={styles.textView2}>{name}</Text>
        <Button title="Click" onPress={clickMe} />
      </View>
    );
};

export default MyPrompt;