import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import {HomeScreen ,Appointments,AppSettings,Chat,LawnCare } from '../screens';

const Tab = createBottomTabNavigator();

export const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#62a725',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Appointments"
        component={Appointments}
        options={{
          tabBarLabel: 'Appointments',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
     <Tab.Screen
        name="AppSettings"
        component={AppSettings}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#ee0bf5',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarColor: '#f59e0b',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="LawnCare"
        component={LawnCare}
        options={{
          tabBarButton: () => null,
        
}}
      />
    </Tab.Navigator>
  );
}
