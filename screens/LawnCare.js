import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const LawnCare = () => {
  
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };
  return (
    <View style={styles.container}>
      <Button title='Sign Out of lawn care' onPress={handleLogout} />
    </View>
  );
};

export default LawnCare;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});