import React from 'react'
import { View } from 'react-native'
import { styles } from '../styles'

const FlexScreen = () => {
  return (
      <View style={styles.flexView}>
        <View style={styles.inner_up}></View>
        <View style={styles.inner_middle}></View>
        <View style={styles.inner_bottom}></View>
    </View>
  )
}

export default FlexScreen