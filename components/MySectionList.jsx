import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { styles } from '../styles';
import { DATA } from './data';



const Item = ({title}) => {
    return(
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};


const MySectionList = () => {

    return (
        <View style={styles.section}>
            <SectionList 
                sections={DATA}
                keyExtractor={(item, index) => item+index}
                renderItem={({item}) => <Item title={item}/>}
                renderSectionHeader={({section:{title}}) => (
                    <Text style={styles.header}>{title}</Text>
                )} />            
        </View>
    )
}

export default MySectionList;