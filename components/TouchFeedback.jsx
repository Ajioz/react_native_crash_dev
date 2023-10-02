import React, {useState} from "react";
import { Text, View, TouchableNativeFeedback } from "react-native";
import { styles } from "../styles";

const TouchFeedback = () => {
    const [rippleOverFlow, setRippleOverFlow] = useState(false)

  return (
    <View style={styles.container}>
        <TouchableNativeFeedback
            onPress={() => setRippleOverFlow(!rippleOverFlow)}
            background={TouchableNativeFeedback.Ripple('blue', rippleOverFlow)}>
                <View style={styles.touchable}>
                    <Text style={styles.regularText}>TouchableNativeFeedback</Text>
                </View>

        </TouchableNativeFeedback>
    </View>
  );
};

export default TouchFeedback;
