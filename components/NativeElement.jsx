import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { styles } from "../styles";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Avatar, Badge} from 'react-native-element'

const NativeElement = () => {

    const [message, setMessage] = useState(2)
    return (
      <View style={styles.container2}>
        <Avatar
          rounded
          containerStyle={{ height: 50, width: 50 }}
          source={{
            uri: "img-link",
          }}
        />
        <Avatar
          rounded
          containerStyle={{ height: 50, width: 50 }}
          source={{
            uri: "img-link2",
          }}
        />
        <Avatar
          rounded
          containerStyle={{ height: 50, width: 50 }}
          source={{
            uri: "img-link3",
          }}
        />
        <Badge
          status="success"
          containerStyle={{ position: "absolute", right: 160, top: 400 }}
          value={message}
        />
        <Badge status="error" />
        <Badge status="primary" />
        <Badge status="warning" />
        <Text>Lily</Text>
      </View>
    );
}

export default NativeElement