import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";


const InputProps = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>
        New Google Meet Invites: We've recently transitioned to a new Google
        Meet account to enhance our online class experience. As a result, we
        have created new Google Meet invites for our classes...
      </Text>
    </View>
  );
};

export default InputProps;