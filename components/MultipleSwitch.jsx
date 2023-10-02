import React, { useState } from 'react'
import { View, Text, TextInput, Switch } from 'react-native'
import { styles } from '../styles';

const STATUS ={
  location: false,
  mic: false,
  storage: false
}

const MultipleSwitch = () => {
  const [status, setStatus] = useState(STATUS);

  const toggleLocation = () =>  setStatus((prev) => ({...prev, location: !status.location}))
  const toggleMicphone = () =>  setStatus((prev) => ({...prev, mic: !status.mic}))
  const toggleStorage  = () =>  setStatus((prev) => ({...prev, storage: !status.storage}))

  return (
    <View style={styles.container}>

      <Text style={styles.regularText}>Location is {status.location? "On" : "Off"}</Text>
      <Switch
        trackColor={{true: '#81b0ff', false:'#333'}}
        thumbColor={'#ddd'}
        ios_backgroundColor={'#ddd'}
        onValueChange={toggleLocation}
        value={status.location} 
        style={{ transform:[{ scaleX: 1.5 }, { scaleY: 1.5 }] }}/>
      
      <Text style={styles.regularText}>Mic is {status.mic? "On" : "Off"}</Text>
      <Switch
        trackColor={{true: '#a7c523', false:'#5e3453'}}
        thumbColor={'#ddd'}
        ios_backgroundColor={'#ddd'}
        onValueChange={toggleMicphone}
        value={status.mic} 
        style={{ transform:[{ scaleX: 1.5 }, { scaleY: 1.5 }] }}/>
      
      <Text style={styles.regularText}>Storage is {status.storage? "On" : "Off"}</Text>
      <Switch
        trackColor={{true: '#b1b11544rd', false:'#34675d'}}
        thumbColor={'#ddd'}
        ios_backgroundColor={'#ddd'}
        onValueChange={toggleStorage}
        value={status.storage} 
        style={{ transform:[{ scaleX: 1.5 }, { scaleY: 1.5 }] }}/>
    </View>
  )
}

export default MultipleSwitch;