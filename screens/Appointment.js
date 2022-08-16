import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Top= createNativeStackNavigator();

function Appointment() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen222</Text>
    </View>
  );
}

function AppTop() {
  return (
    <NavigationContainer>
      <Top.Navigator
      screenOptions={
        {
          headerShown: true
      }
    }>
      
        <Top.Screen
          name="Home"
          component={Appointment}
          options={{ title: 'My home' }}
        />
      </Top.Navigator>
    </NavigationContainer>
  );
}

export default Appointment;