import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { useTheme } from '@react-navigation/native';

export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'Lawn Care', code: '#1abc9c', image: require('../assets/mower.png') },
    { name: 'Junk Removal', code: '#2ecc71',image: require('../assets/junk.png') },
    { name: 'Sod Install', code: '#3498db' ,image: require('../assets/sod.png') },
    { name: 'Tree Trimming', code: '#9b59b6',image: require('../assets/trimming.png') },
    { name: 'Leaf Removel', code: '#34495e',image: require('../assets/leaf.png') },
    { name: 'Tree Removal', code: '#16a085',image: require('../assets/Tree.png') },
    { name: 'Pavers & Concrete', code: '#27ae60',image: require('../assets/mixer.png') },
    { name: 'Custom Project', code: '#2980b9',image: require('../assets/question.png') },
  ]);
  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Image source={item.image} style={styles.itemImage } />

          <Text style={styles.itemName}>{item.name}</Text>
        </View>
      )}
    />
  );
}


const styles = StyleSheet.create({
  gridView: {
    marginTop: 100,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'center',
  },
  itemImage:{
    width: '80%',
    height: '70%',
    alignSelf: 'center',
    resizeMode: 'contain',

  },
});