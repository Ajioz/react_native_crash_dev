import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles';
import { DATA, OSES } from './data';
import CustomSectionList from './CustomSectionList';


const UseCustomList = () => {
  return (
    <View style={styles.section}>
        {/* <CustomSectionList data={OSES} /> */}
        <CustomSectionList data={DATA} />
    </View>
  )
}

export default UseCustomList