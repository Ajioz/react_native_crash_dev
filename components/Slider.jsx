import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { styles } from "../styles";
import { View, Text } from "react-native";

const Slider = () => {
  const [range, setRange] = useState(0);

  return (
    <View style={styles.container2}>
      <Text
        style={{ fontSize: 50, fontWeight: "bold", margin: 20, opacity: range }}
      >
        Visible
      </Text>
      <Text style={{ fontSize: 50, fontWeight: "bold", margin: 20 }}>
        {Math.floor(range * 100)}
      </Text>
      <Slider
        style={{ width: 300, height: 50 }}
        onValueChange={(val) => setRange(val)}
        value={range}
        minimumValue={0}
        maximumValue={1}
        thumbTintColor="darkcyan"
      />
    </View>
  );
};

export default Slider;
