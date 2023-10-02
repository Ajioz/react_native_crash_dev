import React, {useState} from 'react'
import { View, Text, TextInput, Modal, TouchableOpacity, Image } from 'react-native'
import { styles } from '../styles'


const ModalScreen = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [open, setOpen] = useState(false);



    return (
        <View style={styles.container}>

            <TextInput style={styles.input}placeholder='Type Name' onChangeText={(name)=> setName(name)} />
            <TextInput style={styles.input}placeholder='Your Age' onChangeText={(age) => setAge(age)} />

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText} onPress={()=> setOpen(true)}>submit</Text>
            </TouchableOpacity>

            <Modal visible={open}>
                <View style={styles.modal}>
                    <View style={{flexDirection:'row'}}> 
                        <Text style={styles.textView}> Hurray </Text>
                        <Image source={require('../assets/welcome.svg')} style={styles.wave}/>
                        <Text style={styles.textView}> ! </Text>
                    </View>
                    <View style={{ width: '100%', padding: 10}}>
                        <Text style={styles.textView}>{name} is {age} years young, Let's celebrate </Text>
                    </View>
                     <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText} onPress={()=> setOpen(false)}>close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

        </View>
    )
}

export default ModalScreen