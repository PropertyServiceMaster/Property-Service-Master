import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



import HomeScreen from './screens/HomeScreen';
import Appointments from './screens/Appointments';
import Settings from './screens/Settings';
import Chat from './screens/Chat';  // Import the Chat component


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
      >
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#fff',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={35} />
            ),
          }}
        />
        
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarColor: '#1f65ff',
            tabBarIcon: ({ color }) => (
              <Icon name="account" color={color} size={26} />
            ),
          }}
        />
         <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: 'Chat',
            tabBarColor: '#694fad',
            tabBarIcon: ({ color }) => (
              <Icon name="account" color={color} size={26} />
            ),
          }}
        />
         <Tab.Screen
          name="Appointments"
          component={Appointments   }
          options={{
            tabBarLabel: 'Appointments',
            tabBarColor: '#d02860',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }


  const app = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Appointments" component={Appointments} />
          <Tab.Screen name="Settings" component={Settings} />
          <Tab.Screen name="Chat" component={Chat} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  export default app;