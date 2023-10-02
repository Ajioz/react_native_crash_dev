import React, { useState } from "react";
import { styles } from "../styles";
import { View, Alert } from "react-native";
import { BottomSheet, Input, ListItem, Button } from "react-native-element";

const BottomSheetCom = () => {
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);

  const submit = () => {
    Alert.alert("Welcome!", `Hello This is bottom sheet`);
  };

  const clear = () => {
    setName("");
  };

  const list = [
    { title: "Submit", onPress: submit },
    { title: "Clear", onPress: clear },
    {
      title: "Cancel",
      containerStyle: {
        backgroundColor: "red",
        titleStyle: { color: "white" },
        onPress:() => setVisible(false)
      },
    },
  ];

  return (
    <View style={styles.container2}>
      <Input
        placeholder="Enter your name"
        value={name}
        onChangeText={(txt) => setName(txt)}
      />
      <Button title="Submit" onPress={() => setVisible(true)} />
      <BottomSheet
        isVisible={visible}
        containerStyle={{ backgroundColor: "white" }}
      >
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </View>
  );
};

export default BottomSheetCom;
