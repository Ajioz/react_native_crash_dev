import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  ActionSheetIOS,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { styles } from "../styles";

const ActionSheet = () => {
  // const [result, setResult] = useState('Random Numner')
  const [name, setName] = useState("");

  const onLongPress = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        Options: ["cancel", "Clear Text"],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
        userInterfaceStyle: "dark",
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
        } else if (buttonIndex == 1) {
          setName("");
        }
      }
    );
  };
  // const onPress = () => {
  //   ActionSheetIOS.showActionSheetWithOptions({
  //     Options:["cancel", "Generate NUmber", "Reset"],
  //     destructiveButtonIndex: 2,
  //     cancelButtonIndex: 0,
  //     userInterfaceStyle: 'dark',
  //     title: 'General',
  //     message: 'generating random number'
  //   },
  //   buttonIndex => {
  //     if(buttonIndex === 0){
  //     }else if(buttonIndex == 1){
  //       setResult(Math.floor(random() * 100 )+1)
  //     }else if(buttonIndex == 2){
  //       setResult("Random Number")
  //     }
  //   })
  // }

  return (
    <View style={styles.container2}>
      {/* <Text style={styles.textView2}>{result}</Text>
      <Button title="Show actionSheet" onPress={onPress} /> */}
      <TextInput
        style={styles.input}
        onChangeText={(name) => setName(name)}
        placeholder="Enter you name"
      />
      <TouchableOpacity
        onPress={() => Alert.alert("Welcome", "Hello" + name + ", welcome to our app")}
        onLongPress={onLongPress}
      >
        <Text style={styles.textView2}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionSheet;
