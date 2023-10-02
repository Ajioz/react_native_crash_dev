import React, {useState} from 'react'
import { View, ActivityIndicator, TextInput, Button, Alert } from 'react-native'
import { styles } from '../styles'

const Loader = () => {

    const [name, setName] = useState('');
    const [show, setShow] = useState(false);

    const clickMe = () => {
        setShow(prev => !prev);
        setTimeout(() =>  { 
            setShow(prev => !prev);
            Alert.alert('Welcome', 'Welcome to out app!');
            console.log(name);
        }, 1500)
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Enter Your name' onChangeText={(e) => setName(e)}/>
            <ActivityIndicator size={'large'} color={'darkcyan'} animating={show}/>
            <Button title='show' onPress={clickMe} />
        </View>
    )
}

export default Loader