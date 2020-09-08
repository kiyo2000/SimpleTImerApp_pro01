import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Import Firebase config here
import { firebaseConfig } from './config/firebase'

//Import Firebase library after installing fire base via expo. '*' is an alias
import * as firebase from 'firebase'

// // Initialise firebase
if ( !firebase.app.length){
firebase.initializeApp( firebaseConfig )
}

// if ( !firebase.app.length){
// firebase.initializeApp( firebaseConfig)
// }

//Establish connection bewtween screens
import { HomeScreen } from './components/HomeScreen'
import { TimerScreen } from './components/TimerScreen'
import { AuthScreen } from './components/AuthScreen'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Signup" component={AuthScreen} />
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
