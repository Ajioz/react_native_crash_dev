import React, { useState } from "react";
import { styles } from "../styles";
import { View, Alert } from "react-native";
import { SocialIcon } from "react-native-element";

const SocialIcons = () => {
  const [name, setName] = useState("");

  const signIn = (appSign) => {
    Alert.alert("Voila!", `Hello ${name} You are sucessfuly signed in`);
  };

  return (
    <View style={styles.container2}>
      <SocialIcon type="twitter" />
      <SocialIcon type="whatsapp" />
      <SocialIcon type="facebook" light />

      <Input
        placeholder="Enter your name"
        value={name}
        onChangeText={(txt) => setName(txt)}
      />

      <Text style={styles.textView}>Sign in with </Text>
      <SocialIcon
        title="Facebook"
        type="facebook"
        button
        onPress={() => signIn("Facebook")}
      />
      <SocialIcon
        title="Google"
        type="google"
        button
        onPress={() => signIn("Google")}
      />
      <SocialIcon
        title="Linkedin"
        type="linkedin"
        button
        onPress={() => signIn("Linkedin")}
      />
    </View>
  );
};

export default SocialIcons;
