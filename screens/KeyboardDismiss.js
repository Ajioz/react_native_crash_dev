import React, {useState} from 'react'
import { View, TextInput, Text, ScrollView, TouchableOpacity, Alert, Button  } from 'react-native'
import { styles } from '../styles'

/* 
  to dismiss keyboard, a more robust approach!
*/

const KeyboardDismiss = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);

  const handleNumber = (props) => {
    if(props === 'add') setNumber(number+1)
    else{
      if(number <= 0) setNumber(0);
      else setNumber(number-1);
    }
  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled' >   
        <View style={styles.dismissView}>
            <TextInput style={styles.input} placeholder='Enter your name' onChangeText={(value) => setName(value)}/>
            <TouchableOpacity onPress={() => Alert.alert("Detail", "Your Name is " + name.toString())}>
              <View style={styles.customBtn }>
                <Text style={styles.btnText}>Submit</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.number}>{number}</Text>
            <View style={styles.btnView}>   
              <Button title='addValue' onPress={() => handleNumber('add')}/>
              <Button title='subtract' onPress={() => handleNumber('subtract')}/>
            </View>
        </View>
    </ScrollView>
  )
}

export default KeyboardDismiss;