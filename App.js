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
if ( !firebase.apps.length){
firebase.initializeApp( firebaseConfig )
}

//Establish connection bewtween screens
import { HomeScreen } from './components/HomeScreen'
import { TimerScreen } from './components/TimerScreen'
import { AuthScreen } from './components/AuthScreen'

export default function App() {

    //Pass email and password to firebase. Use catch to throw an exception
    //Add another parameter 'intent'
    const signup = (intent, email, password) => {
      if( intent == 'signup' ){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(error => console.log(error) )
      }
    }
    //Check if user is logged in or not 
    firebase.auth().onAuthStateChanged( (user) => {
      if( user ) {
        console.log('user logged in')
      }
      else {
        console.log('user not logged in')
      }
    } )

  return (
    <NavigationContainer>
      <Stack.Navigator>
    {/* <Stack.Screen name = "Signup" component={AuthScreen} /> */}
    <Stack.Screen name = "Signup" >
      { (props) => <AuthScreen {...props} signup={ signup } />}
    </Stack.Screen>
    
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
