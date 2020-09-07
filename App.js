import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Establishin the connection bewtween HomeScreen.js
import { HomeScreen } from './components/HomeScreen'
import { TimerScreen } from './components/TimerScreen'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
    {/* <Stack.Screen name = "Home" component = {HomeScreen} /> */}
        <Stack.Screen name = "Home">
          {/* Passing object via props */}
          { (props) => <HomeScreen  {...props} text="- Welcome Home Screen -" /> } 
        </Stack.Screen>
        <Stack.Screen name = "Timer" component = {TimerScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

//Initialise Navigation Stack
const Stack = createStackNavigator()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
