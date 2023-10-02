import React from 'react'
import { View, Text, SectionList } from 'react-native';
import { styles } from '../styles';






const CustomSectionList = (props) => {
    
    const Item = ({title}) => {
        return(
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        )
    };
    
    return (
        <SectionList 
            sections={props.data}
            keyExtractor={(item, index) => item+index}
            renderItem={({item}) => <Item title={item} />}
            renderSectionHeader={({section:{title}}) => (
                <Text style={styles.header}>{title}</Text>
            )} />
    )
}

export default CustomSectionList;