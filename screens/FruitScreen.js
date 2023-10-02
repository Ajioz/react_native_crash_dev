import React from 'react'
import { Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { fruits } from '../warehouse'
import { styles } from '../styles';

const FruitScreen = () => {
  const onPressHandler = (props) => {
    console.log(props)
  }
  return (

    // <ScrollView>
    //    {fruits.map((fruit) => (
    //       <View key={fruit.id} style={styles.fruitContainer}> 
    //           <Text style={styles.fruit}>{fruit.name}</Text>
    //       </View>
    //    ))}
    // </ScrollView>
      <FlatList data={fruits} keyExtractor={(item) => item.id}
        renderItem={({item}) =>(
        <TouchableOpacity
          onPress={() => onPressHandler(item.name)}>
          <View style={styles.fruitContainer}> 
              <Text style={styles.fruit}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )} />
  )
}

export default FruitScreen