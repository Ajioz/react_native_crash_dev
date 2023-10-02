import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles';

const DisplayScreen = ({ onClear, control, name, age}) => {

    if(control){
        if(name && age <= 18) Alert.alert('Notice', "Sorry you can't drink")
    }
    
    return (
        <View style={styles.container}>
            {
               age >= 18 && control && 
                <>
                    <Text style={styles.textView}>Hey {name}, have some drink, please!</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText} onPress={onClear}>clear</Text>
                    </TouchableOpacity>
                </>
            }
        </View>
    )
}

export default DisplayScreen