import React, { useState } from "react";
import { View, ToastAndroid, Button } from "react-native";
import { styles } from "../styles";

const Toast = () => {
  const showToast = () => {
    ToastAndroid.show("Welcome to Programming", ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Welcome to Programming",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Welcome to Programming",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      30,
      50
    );
  };

  return (
    <View style={styles.container}>
      <Button title="show toast" onPress={() => showToast()} />
      <Button title="show toast with Gravity" onPress={() => showToastWithGravity()} />
      <Button
        title="show toast with Gravity and offset"
        onPress={() => showToastWithGravityAndOffset()}
      />
    </View>
  );
};

export default Toast;
