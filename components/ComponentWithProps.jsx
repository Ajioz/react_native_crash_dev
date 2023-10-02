import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Switch} from 'react-native'
import {styles} from '../styles';
import DisplayScreen from '../screens/DisplayScreen';
import Toggle from './Toggle';

const STATUS = {
  CONTROL: false,
  ENABLE: false
}

const ComponentWithProps = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const [control, setControl] = useState(STATUS);
  
  const toggleSwitch = () => {
    setControl((previousState) => {
      return(
        {...previousState, ENABLE: !control.ENABLE, CONTROL:false }
      )
    });
  };

  const onSubmit = () =>  {
    setControl((prev) => {
      return(
        { ...prev, CONTROL: true}
      )
    })
  }

  const onClear = () =>  {
    setControl((prev) => {
      return(
        { ...prev, CONTROL: false}
      )
    })
  }
 
    
  return (
    <>
      <View style={styles.container}>
        <TextInput  style={styles.input} placeholder='Name' onChangeText={(text)=> setName(text)}/>
        <TextInput  style={styles.input} placeholder='Age' onChangeText={(text)=> setAge(text)}/>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText} onPress={onSubmit}>submit</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        {
          control.ENABLE ? (
            <Text style={styles.regularText}>You're Game</Text>
          ):(
            <Text style={styles.regularText}>Clear State</Text>
          )
        }
        <Toggle toggleSwitch={toggleSwitch} isEnabled={control.ENABLE} />
      </View>
      <DisplayScreen name={name} age={age} control={control.CONTROL} onClear={onClear}/>
    </>
  )
}

export default ComponentWithProps;