import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'Lawn Care', code: '#1abc9c' },
    { name: 'Junk Removal', code: '#2ecc71' },
    { name: 'Sod Install', code: '#3498db' },
    { name: 'Tree Trimming', code: '#9b59b6' },
    { name: 'Leaf Removel', code: '#34495e' },
    { name: 'Tree Removal', code: '#16a085' },
    { name: 'Pavers & Concete', code: '#27ae60' },
    { name: 'Custom Project', code: '#2980b9' },
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
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
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
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});