import React, { useState } from "react";
import { styles } from "../styles";
import { View, Alert } from "react-native";
import { Button, CheckBox, Input } from "react-native-element";
import Icon from "react-native-vector-icons/FontAwesome";

const ButtonComponent = () => {
  const [writing, setWriting] = useState(false);
  const [reading, setReading] = useState(false);
  const [music, setMusic] = useState(false);

  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState('')

  const hobbies = [];

  const click = () => {
    if (writing) hobbies.push("writing");
    if (reading) hobbies.push("Reading");
    if (music) hobbies.push("music");
    Alert.alert("Hobbies", "Hello User, your hobbies are " + hobbies);
  };

  const genderMale = () => {
    setMale(true);
    setFemale(false);
    setGender('Male');
  }
  
  const genderFemale = () => {
    setMale(false);
    setFemale(true);
    setGender('Female');
  }

  const submit = () => {
    Alert.alert("Hobbies", `Hello ${name} you are ${gender}`);
  }

  return (
    <View style={styles.container2}>
      <Button
        title="Solid Button"
        type="solid"
        titleStyle={{ color: "cyan", fontSize: 30 }}
      />
      <Button
        title="Click"
        icon={<Icon name="arror-right" size={14} color={"white"} />}
      />
      <Button title="loading" loading={false} />
      <CheckBox
        title="Reading"
        checked={reading}
        onPress={() => setReading(!reading)}
        // checkedTitle="Checked"
        // checkedColor='red'
      />
      <CheckBox
        title="writing"
        checked={writing}
        onPress={() => setWriting(!writing)}
        // checkedTitle="Checked"
        // checkedColor='red'
      />
      <CheckBox
        title="music"
        checked={music}
        onPress={() => setMusic(!music)}
        // checkedTitle="Checked"
        // checkedColor='red'
      />
      <Button title="Click" onPress={click} />

      <Input
        placeholder="Enter your name"
        value={name}
        onChangeText={(txt) => setName(txt)}
      />

      <CheckBox
        title="Male"
        center
        checked={male}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={genderMale}
      />
      <CheckBox
        title="Female"
        center
        checked={female}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={genderFemale}
      />
      <Button
        title="Submit"
        type="solid"
        titleStyle={{ color: "cyan", fontSize: 30 }}
        onPress={submit}
      />
    </View>
  );
};

export default ButtonComponent;
