import React, { useState } from "react";
import { styles } from "../styles";
import { View } from "react-native";
import { Button, Overlay, Input } from "react-native-element";

const Overlay = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => setVisible(!visible);

  return (
    <View style={styles.container2}>
      <Input
        placeholder="Enter your Name"
        onChangeText={(txt) => setName(txt)}
        value={name}
      />
      <Input
        placeholder="Enter your Age"
        onChangeText={(txt) => setAge(txt)}
        value={age}
      />
      <Button title="Submit" type="outline" onPress={toggleOverlay} />
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{ backgroundColor: "gray", width: 300, height: 200 }}
        backdropStyle={{ backgroundColor: 'white', opacity:0.5 }}
      >
        <Text style={styles.paragraph}>{name}</Text>
        <Text style={styles.paragraph}>{age}</Text>
        {/* <Button title="Close" type="outline" onPress={toggleOverlay} /> */}
      </Overlay>
    </View>
  );
};

export default Overlay;
