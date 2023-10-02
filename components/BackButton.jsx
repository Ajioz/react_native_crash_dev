import React, { useEffect } from "react";
import { Text, View, Alert, BackHandler } from "react-native";
import { styles } from "../styles";

const BackButton = () => {

    useEffect(() => {
        const backAction = () => {
            Alert.alert("Stop", "Are you show you want to go back?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: 'cancel'
                },
                {
                    text: "YES",
                    onPress: () => BackHandler.exitApp(),
                },
            ])
            return true
        }
        
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress', backAction
        )
      return () => true
    }, [])
    
  return (
    <View>
        <Text style={styles.textView2}>Click on back button</Text>
    </View>
  )
}

export default BackButton