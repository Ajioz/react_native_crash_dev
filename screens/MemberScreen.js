import React, {useState} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity  } from 'react-native';
import {styles} from '../styles';
import { data } from '../warehouse'


export default function MemberScreen() {

  const [status, setStatus] = useState(false);
  const [index, setIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('')


  const onPress = () => {
    let count = index;
    count += 1;
    if(count > data.length-1) count = 0;
    setIndex(count);
  }

  // const handleSubmit = () => {
  //   console.log('submit')
  // }
  
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image source={data[index].image} style={styles.image}/>
        <Text style={styles.name}>{data[index].name}</Text>
        <Text style={styles.bio}>{data[index].bio}</Text>
        <View style={styles.details}>
          <Text style={styles.emailLabel}>email:</Text>
          <Text>{email}</Text>
          <Text style={styles.mobileLabel}>call:</Text>
          <Text>{mobile}</Text>
        </View>
      </View>
      <View style={styles.addDetails}>
        <View style={styles.add}>
          <Text>email</Text>
          <TextInput
              style={styles.input}
              value={email}
              onChangeText={(email) => setEmail(email)}
              placeholder="Your email"/>
        </View>
        <View style={styles.add}>
          <Text>Mobile</Text>
          <TextInput
            style={styles.input}
            value={mobile}
            placeholder="Your mobile"
            onChangeText={(mobile) => setMobile(mobile)}
            keyboardType="numeric" />
        </View>
      </View>
      <View>
         <TouchableOpacity style={!status? styles.btn: styles.disable} disabled={status}
            onPress={ onPress }>
            <Text style={styles.btnText}>swipe</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
}

