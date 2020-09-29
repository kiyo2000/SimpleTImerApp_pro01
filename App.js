import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
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
import { DetailScreen } from './components/DetailScreen'//As a guidline

import { TouchableOpacity } from 'react-native-gesture-handler';
//import { useState } from 'react'; // Commented out because a new useState has been added to line 2.


export default function App() {

  //Indicate user logged in or not by changing the useSate depending on uer logged in or not
  const [auth,setAuth] = useState(false)

    //Pass email and password to firebase. Use catch to throw an exception
    //Add another parameter 'intent' to check if the user credentials already exist or not. 
    const signup = (intent, email, password) => {
      if( intent == 'signup' ){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(error => console.log(error) )
      }
      else if ( intent == 'login'){
        firebase.auth().signInWithEmailAndPassword( email, password )
        .catch( error => console.log(error) )
      }
    }

    //Create a call back function

    //Check if user is logged in or not 
    firebase.auth().onAuthStateChanged( (user) => {
      if( user ) {
        setAuth(true)
        console.log('user logged in')
      }
      else {
        setAuth(false)
        console.log('user not logged in')
      }
    } )

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*Create a screen on Stack <Stack.Screen name = "SIGNUP" component={AuthScreen} /> */}
        <Stack.Screen name = "SIGNUP" >
          { (props) => <AuthScreen {...props} signup={ signup } loggedIn={auth} />}
        </Stack.Screen>
        {/* Prviously <Stack.Screen name = "HOME" component = {HomeScreen} /> */}
        {/* Adding sign out function on navigation */}
          <Stack.Screen 
            name = "HOME"
            options={({navigation,route}) => ({
            // headerTitle: "HOME",
              headerRight: () => (
                <TouchableOpacity style={styles.signout} onPress={() => {
                  firebase.auth().signOut().then(() => {
                    setAuth(false)
                    navigation.reset({ index: 0, routes: [{name: "SIGNUP"}] })
                  })
                }}>
                    <Text style={styles.signoutText}> SIGNOUT </Text>
                </TouchableOpacity>
              )
            })}
          >
            {/* Passing object via props */}
            { (props) => <HomeScreen  {...props} text="Hello, let's begin!" /> } 
          </Stack.Screen>
        <Stack.Screen name="DETAIL" component= {DetailScreen} />
        <Stack.Screen name = "TIMER" component = {TimerScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

//Initialise Navigation Stack
const Stack = createStackNavigator()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signout: {
    padding: 5,
    marginRight: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },

  signoutText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
