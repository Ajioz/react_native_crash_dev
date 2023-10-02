import React, {useState} from 'react'
import { View, Image, Button, Alert, TextInput, Text } from 'react-native'
import { images } from '../warehouse'
import { styles } from '../styles';

// const images = {
//     pics:{
//         '0':require('../assets/dice_1.jpg'),
//         '1':require('../assets/dice_2.jpg'),
//         '2':require('../assets/dice_3.jpg'),
//         '3':require('../assets/dice_4.jpg'),
//         '4':require('../assets/dice_5.jpg'),
//         '5':require('../assets/dice_6.jpg'),
//     }
// }

const DiceScreen = () => {

    const [dice, setDice] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const pressHandler = () => {
        Alert.alert("Details", "Are you sure you want to submit?", [
            { text: "Yes", onPress : () => console.log("Yes is pressed") },
            { text: "No", onPress : () => noHandler() },
        ]);
        console.log(name, age, gender);
    }

    const noHandler = () => {
        setName(""); setAge(0); setGender("");
    }

    return (
        <>
            <View style={styles.dice}>
                <Image source={images.pics[dice]} style={styles.img} />
                    <Button 
                        title='Roll' 
                        onPress={() => setDice(Math.floor(Math.random() * 6))}
                        color="#841584"
                    />
            </View>
            <View style={styles.container}>
                <TextInput  style={styles.input} onChangeText={(name) => setName(name)} placeholder="Name"/>
                <TextInput  style={styles.input} onChangeText={(age) => setAge(age)} placeholder="Age"/>
                <TextInput  style={styles.input} onChangeText={(gender) => setGender(gender)} placeholder="Sex"/>
                <Button title='submit' onPress={ pressHandler } />
                <Text>{name} {age} {gender} </Text>
            </View>
        </>
    )
}

export default DiceScreen