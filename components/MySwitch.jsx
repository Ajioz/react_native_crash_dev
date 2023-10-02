import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Alert } from 'react-native';

export default function MySwitch() {
  const [SwitchOnValueHolder, setSwitchOnValueHolder] = useState(false);

  const ShowAlert = (value) => {
    setSwitchOnValueHolder(value);
    if (value == true) {
      Alert.alert("You have turned ON the Switch.");
    }
    else {
      Alert.alert("You have turned OFF the Switch.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> It is a Switch </Text>
      <Switch onValueChange={(value) => ShowAlert(value)} style={{ marginBottom: 10 }} value={SwitchOnValueHolder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#afff63',
  },
  text: {
    fontSize: 19,
    color: '#000000',
  },
});
