import React, { useState } from "react";
import { styles } from "../styles";
import { View, Alert } from "react-native";
import { FAB, SpeedDial } from "react-native-element";
import { Ionicons } from "@expo/vector-icons";

const FaB = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [open, setOpen] = useState(false);

  const pressFab = () => {
    Alert.alert("Welcome", `Hello ${name} to our app. Your age ${age}`);
    setOpen(!open);
  };

  return (
    <View style={styles.container2}>
      <Input
        placeholder="Enter your name"
        value={name}
        onChangeText={(txt) => setName(txt)}
      />
      <Input
        placeholder="Your Age"
        value={age}
        onChangeText={(txt) => setAge(txt)}
      />
      <FAB
        title="Add"
        placement="right"
        size="small"
        upperCase={true}
        icon={<Ionicons name="add-circe" size={24} color="white" />}
        buttonStyle={{ backgroundColor: "green" }}
        onPress={pressFab}
      />
      <SpeedDial
        isOpen={open}
        icon={{ name: "edit", color: "white" }}
        openIcon={{ name: "close", color: "white" }}
        onOpen={setOpen(!open)}
        onClose={setOpen(!open)}
        buttonStyle={{ backgroundColor: "gold" }}
      >
        <SpeedDial.Action
          icon={{ name: "add", color: "white" }}
          title="Add"
          buttonStyle={{ backgroundColor: "white" }}
          onPress={pressFab}
        />
        <SpeedDial.Action
          icon={{
            name: "delte",
            color: "white",
            backgroundColor: "transparent",
          }}
          title="delete"
          buttonStyle={{ backgroundColor: "white" }}
          onPress={() => {
            setAge(0);
            setName("");
            setOpen(!open);
          }}
        />
      </SpeedDial>
    </View>
  );
};

export default FaB;
