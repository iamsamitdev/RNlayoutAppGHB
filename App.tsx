import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const App = () => {

  const items = [
    'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'
  ]

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={require('./assets/wallet.png')} style={{width: '100%', height: 300}} />
        <Text style={{fontSize: 30}}>My Products</Text>
        {
          items.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => console.log(index)}>
                <View key={index} style={styles.items}>
                  <Text>{item}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-evenly", // flex-start, flex-end, center, space-between, space-around, space-evenly
    marginTop: 50,
    padding: 10,
  },
  items: {
    height: 100,
    backgroundColor: 'red',
    margin: 10,
  }
})

export default App