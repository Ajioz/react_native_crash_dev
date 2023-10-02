import React, { useRef, useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  DrawerLayoutAndroid,
} from "react-native";
import { styles } from "../styles";

const MyDrawer = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const changeDrawerPosition = () => {
    drawerPosition === "left"
      ? setDrawerPosition((prev) => (prev = "right"))
      : setDrawerPosition((prev) => (prev = "left"));
  };

  const NavigationView = () => {
    return (
      <View style={[styles.container3, styles.navigationContainer]}>
        <Text style={styles.paragraph}>My Account</Text>
        <Text style={styles.paragraph}>{name}</Text>
        <Text style={styles.paragraph}>{age}</Text>
        <Button
          title="Close Drawer"
          onPress={() => drawer.current.closeDrawer()}
        />
      </View>
    );
  };

  return (
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={NavigationView}
      >
        <View style={styles.container3}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name"
            onChangeText={(name) => setName(name)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Your Age"
            onChangeText={(age) => setAge(age)}
            keyboardType="numeric"
          />
          <Text style={styles.paragraph}>Drawer on the {drawerPosition}</Text>
          <Button
            title="Change Drawer Position"
            onPress={() => changeDrawerPosition()}
          />
          <Text style={styles.paragraph}>
            Swipe from the side or press the button
          </Text>
          <Button
            title="Open Drawer"
            onPress={() => drawer.current.openDrawer()}
          />
        </View>
      </DrawerLayoutAndroid>
  );
};

export default MyDrawer;
