import React from "react";
import { Text, View,  } from "react-native";
import { styles } from "../styles";
import { useRoute } from "@react-navigation/native";

const ProductCategory = () => {
    const route = useRoute();

    return (
        <View style={styles.container2}>
            <Text style={styles.textView2}>Hi, {route.params.name}</Text>
            <Text style={styles.textView2}>Your email is: {route.params.email}</Text>
            <Text style={styles.textView2}>confirm you're, {route.params.age} years old</Text>
        </View>
    )
}

export default ProductCategory