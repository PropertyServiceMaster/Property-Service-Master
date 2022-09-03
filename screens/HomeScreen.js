import * as React from 'react';
import { StyleSheet, View, Text,Image,TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';




function HomeScreen({ navigation }) {
 const [items, setItems] = React.useState([

    { name: 'Lawn Care', code: '#1abc9c', image: require('../assets/mower.png'), route: 'Lawn Care' },
    { name: 'Junk Removal', code: '#2ecc71',image: require('../assets/junk.png'), route: 'Chat'},
    { name: 'Sod Install', code: '#3498db' ,image: require('../assets/sod.png') ,route: 'Chat'},
    { name: 'Tree Trimming', code: '#9b59b6',image: require('../assets/trimming.png'), route: 'Chat'},
    { name: 'Leaf Removel', code: '#34495e',image: require('../assets/leaf.png'), route: 'Chat'},
    { name: 'Tree Removal', code: '#16a085',image: require('../assets/Tree.png'), route: 'Chat'},
    { name: 'Pavers & Concrete', code: '#27ae60',image: require('../assets/mixer.png'), route: 'Chat'},
    { name: 'Custom Project', code: '#2980b9',image: require('../assets/question.png'), route: 'Chat'},

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
   
        <TouchableOpacity onPress={() => {
          navigation.navigate(item.route)
        } }>
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Image source={item.image} style={styles.itemImage } />
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        </TouchableOpacity>
      )}
    />
  );
}


const styles = StyleSheet.create({
  gridView: {
    marginTop: 30,
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

export default HomeScreen;
