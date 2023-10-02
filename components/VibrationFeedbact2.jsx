import React, { useState } from "react";
import { TextInput, View, Vibration, TouchableNativeFeedback } from "react-native";
import { styles } from "../styles";
import { TextInput } from "react-native-gesture-handler";

const VibrationFeedback = () => {

    const [name, setName] = useState('');
    const ONE_SECOND_IN_MS = 1000;

    const PATTERN_DESC = "wait 1s, vibrate 2s, wait 3s";

    const onPress = () => {
        Vibration.vibrate();
        Alert.alert("Welcome", "Hello" + name + ", Welcome to our app")
    }

    const onLongPress = () => {
        Vibration.vibrate(2 * ONE_SECOND_IN_MS);
        Alert.alert("Warning", "Are you sure you want to clear text?",[
            {
                text:"Yes",
                onPress:() => setName("")
            },
            {
                text:"Cancel",
                onPress:() => {}
            },
        ])
    }

  return (
    <View style={styles.container2}>
      <TextInput style={styles.input} onChangeText={(name) => setName(name)} value={name}/>
      <TouchableNativeFeedback
        onPress={onPress}
        onLongPress={onLongPress}
        >
        <View style={styles.btn2}>
            <Text>Submit</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default VibrationFeedback;
