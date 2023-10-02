import React, { useState } from 'react';
import { View, Text, InputAccessoryView, TextInput, Button } from 'react-native'
import { styles } from '../styles';


const MyInputAccesoryView = () => {

    const [info, setInfo] = useState("");
    const InputAccessoryViewId = "id"

    return (
        <View>

            <TextInput 
                placeholder='Enter Information'
                onChangeText={(e) => setInfo(e)}
                value={info}
                style={styles.input}
                inputAccessoryViewID={InputAccessoryViewId}
            />
            <InputAccessoryView nativeID={InputAccessoryViewId}>
                <Button title='Clear Text' 
                    onPress={() => setInfo("")}
                />
            </InputAccessoryView>

        </View>
    )
}

export default MyInputAccesoryView