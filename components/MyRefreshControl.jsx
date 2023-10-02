import React, {useState} from 'react'
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { styles } from '../styles';


const MyRefreshControl = () => {

    const [refresh, setRefresh] = useState(false);

    const pullMe = () => {
        setRefresh(prev => !prev);
        setTimeout(() => setRefresh(prev => !prev), 3000)
    }

    return (
        <View style={styles.container}>
            <ScrollView
                refreshControl={ 
                    <RefreshControl 
                        refreshing={refresh}
                        onRefresh={pullMe}
                    />}>

            </ScrollView>
        </View>
    )
}

export default MyRefreshControl