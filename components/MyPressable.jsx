import React, {useState} from 'react'
import { View, Text, Pressable } from 'react-native';
import { styles } from '../styles';


const MyPressable = () => {

    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text>{count}</Text>
            <Pressable 
                style={({pressed}) => [{backgroundColor:pressed ? "skyblue": "#ddd"}, styles.textView]}
                onPress={() => setCount(prev => prev+1)}>
                { ({pressed}) => <Text>{pressed ? "Pressed" : "Press Me"}</Text> }
            </Pressable>
        </View>
    )
}

export default MyPressable