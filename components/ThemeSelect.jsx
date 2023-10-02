import React, { useState } from "react";
import { View, Text, TextInput, Appearance  } from "react-native";
import { styles } from "../styles";



const ThemeSelect = () => {

    const colorScheme = Appearance.getColorScheme();
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    return (
        <View style={{
            flex: 1,
            padding: 20,
            backgroundColor: colorScheme === 'light' ? 'white' : 'gray' }}>
            <TextInput style={{
                marginTop:20,
                backgroundColor:colorScheme === 'light' ? 'gray': 'white',
                color: colorScheme === 'light' ? 'white' : 'black',
                padding: 20
            }}
            placeholder="Enter your name"
            onChangeText={(txt) => setName(txt)}
            />
            <TextInput style={{
                marginTop:20,
                backgroundColor:colorScheme === 'light' ? 'gray': 'white',
                color: colorScheme === 'light' ? 'white' : 'black',
                padding: 20
                }}
                placeholder="Enter your age"
                onChangeText={(value) => setAge(value)}
            />
            <Text style={{
                fontSize: 20,
                marginTop: 20,
                color:colorScheme === 'light'? 'black': 'white'
            }}>{name} {age} </Text>
        </View>
    );
};

export default ThemeSelect;