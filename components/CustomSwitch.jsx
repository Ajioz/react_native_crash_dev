import React from 'react';
import { View, Text, Switch } from 'react-native'
import { styles } from '../styles';

const CustomSwitch = (props) => {
    return (
        <View style={styles.container} key={props.id}>
            <Text style={styles.regularText}>{props.item} is {props.status? "On" : "Off"}</Text>
            <Switch 
                trackColor={props.trackColor}
                thumbColor={'#ddd'}
                ios_backgroundColor={"#ded3"}
                value={props.status}
                onValueChange={() => props.toggleSwitch(props.id)}
                style={{ transform:[{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            />
        </View>
    )
}

export default CustomSwitch