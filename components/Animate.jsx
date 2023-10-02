import React, { useRef } from "react";
import { Text, View, Button, Animated } from "react-native";
import { styles } from "../styles";

const Animate = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true
        }).start();
    }
    
    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 4000,
            useNativeDriver: true
        }).start();
    }

    return (
        <View style={styles.container2}>            
            <Animated.View
                style={[styles.fadingContainer,
                { 
                    opacity:fadeAnim
                }]}>
                <Text style={styles.fadingText}>Fading View</Text>
            </Animated.View>
                <Text style={styles.buttonRow}>
                    <Button title="Fade In" onPress={fadeIn}/>
                    <Button title="Fade Out" onPress={fadeOut}/>
                </Text>
        </View>
    )
}

export default Animate