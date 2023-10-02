import React from "react";
import { Text, View, Platform } from "react-native";
import { styles } from "../styles";

const GetUserDetails = () => {
  return (
    <View style={styles.container2}>
      <Text>OS</Text>
      <Text style={styles.value}>{Platform.OS}</Text>
      <Text>OS Version</Text>
      <Text style={styles.value}>{Platform.Version}</Text>
      <Text>Is TV</Text>
      <Text style={styles.value}>{Platform.isTV.toString()}</Text>
      {Platform.OS === "ios" && (
        <>
          <Text>isPad</Text>
          <Text style={styles.value}>{Platform.isPad.toString()}</Text>
        </>
      )}
      <Text>Constants</Text>
      <Text style={styles.value}>{JSON.stringify(Platform.constants, null, 2)}</Text>
    </View>
  );
};

export default GetUserDetails;
