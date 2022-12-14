import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { signOut } from 'firebase/auth';

import { auth } from '../config';

const Appointments = () => {
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };
  return (
    <View style={styles.container}>
      <Button title='Sign Out' onPress={handleLogout} />
    </View>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});