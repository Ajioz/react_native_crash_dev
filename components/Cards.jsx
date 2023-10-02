import React from "react";
import { styles } from "../styles";
import { View, Alert } from "react-native";
import { Tile } from "react-native-element";

const Cards = () => {

    const display = () => {
         Alert.alert("Money Heist!", `Episode is playing now`);
    }

    return (
        <View style={styles.container2}>
        <Tile
            imageSrc={require("./assets/splash.png")}
            icon={{
            name: "play-circle",
            type: "font-awesome",
            color: "white",
            size: 30,
            }}
            featured
            onPress={display}
            />
        <Tile
            imageSrc={require("./assets/wave.png")}
            icon={{
                name: "play-circle",
                type: "font-awesome",
                color: "white",
                size: 30,
            }}
            title='Techbrucez'
            caption='Latest update'
            onPress={display}
        />
        </View>
    );
};

export default Cards;