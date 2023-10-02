import React from "react";
import { Text, View, Button, Vibration } from "react-native";
import { styles } from "../styles";

const VibrationFeedback = () => {
  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  const PATTERN_DESC = "wait 1s, vibrate 2s, wait 3s";

  return (
    <View style={styles.container2}>
      <Text style={[styles.header, styles.paragraph]}>Vibration API</Text>

      <View>
        <Button
          style={styles.btn2}
          title="vibrate once"
          onPress={() => Vibration.vibrate()}
        />
      </View>

      <View>
        <Button
          style={styles.btn2}
          title="vibrate 10s"
          onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
        />
      </View>

      <Text style={styles.paragraph}>pattern: {PATTERN_DESC}</Text>

      <Button
        style={styles.btn2}
        title="vibrate with pattern"
        onPress={() => Vibration.vibrate(PATTERN)}
      />
      <Button
        style={styles.btn2}
        title="vibrate with pattern until cancelled"
        onPress={() => Vibration.vibrate(PATTERN, true)}
      />
      <Button
        style={styles.btn2}
        title="stop vibration pattern"
        onPress={() => Vibration.cancel()}
        color={"#ff0000"}
      />
    </View>
  );
};

export default VibrationFeedback;
