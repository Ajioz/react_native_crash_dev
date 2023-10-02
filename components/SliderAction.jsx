import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { styles } from "../styles";
import { View, StyleSheet, Text, TextInput } from "react-native";

const SliderAction = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <View style={styles.container2}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(txt) => setName((prev) => (prev = txt))}
        value={name}
      />
      <Text style={{ fontSize: 30 }}>Age: {Math.floor(age)}</Text>

      <Slider
        style={{ width: 300, height: 50 }}
        onValueChange={(val) => setAge(Math.floor(val))}
        value={age}
        minimumValue={18}
        maximumValue={100}
        thumbTintColor="darkcyan"
      />

      <Button title="Submit" onPress={Alert.alert("Welcome", "Hello", +name+ ", welcome to our app, I notice your are" + age + "have fun!")}/>
    </View>
  );
};

export default SliderAction;
