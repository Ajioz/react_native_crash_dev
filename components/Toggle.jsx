import React from 'react';
import { Switch} from 'react-native'

const Toggle = ({ toggleSwitch, isEnabled }) => {

    return (
        <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}>
        </Switch> 
    )
}

export default Toggle;