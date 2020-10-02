import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
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

export default function App() {

  let listData =[]

  //Indicate user logged in or not by changing the useSate depending on uer logged in or not
  const [auth,setAuth] = useState(false)
  //Reference data(for Realtime Firebase)
  const [dataRef, setDataRef] = useState(null)
  //For updating data
  const [updating,setUpdating] = useState(false)
  //Control setUpadating()
  // useEffect(() => {
  //   setUpdating(true)
  // })

  //Declare another variable to pass the list of data
  let listData = []


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

    //For adding/setting items to Firebase
    const addData = (item) => {
      if(!dataRef){
        return;
      }
      const dataObj = {
        amount: item.amount,
        note: item.note,
        category: item.category
      }
      firebase.database().ref(`${dataRef}/items/${item.id}`).set(dataObj, () =>{
        //setUpdating(true)
      })
    }
    /*New code block*/
    //Update data when the subscription feature is run.
    // const readData = () => {
    //   if(!dataRef) {
    //     return
    //   }
    //   firebase.database().ref(`${dataRef}/items`).once('value')
    //   .then((snapshot) => {
    //     let data = snapshot.val()
    //     if(data) {
    //       let keys = Object.keys(data)
    //       listData = []
    //       keys.forEach((key) => {
    //         let item = data[key]
    //         item.id = key
    //         listData.push(item)
    //       })
    //     }
    //   })
    // }
/*New code block*/
    // //Observe data changes on firebase(for subscricption )
    // const db = firebase.database().ref(`${dataRef}/items`)
    // db.on('value', (snapshot) => {
    //   const dataObj = snapshot.val()
    //   if(dataObj) {
    //     let keys = Object.keys(dataObj)
    //     listData = []
    //     keys.forEach( (key) => {
    //       let item = dataObj[key]
    //       item.id = key
    //       listData.push(item)
    //     })
    //   }
    // })

    /*Previous code block*/
    // const readData = () => {
    //   if(!dataRef) {
    //     return
    //   }
    //   let data = []
    //   firebase.database().ref(`${dataRef}/items`).on('value', (snapshot) => {
    //     const dataObj = snapshot.val()
    //     const keys = Object.keys( dataObj )
    //     keys.forEach( (key) => {
    //       let item = dataObj[key]
    //       item.id = key
    //       listData.push( item )
    //     })
    //     // listData = data
    //   })
    // }

    //Check if user is logged in or not
    //setDataRef points to user id in firebase 
    firebase.auth().onAuthStateChanged( (user) => {
      if( user ) {
        setAuth(true)
        setDataRef(`users/${user.uid}`)
        readData()
        console.log('user logged in')
      }
      else {
        setAuth(false)
        setDataRef(null)
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
          {/* Passing objects via props( text and data) */}
          { (props) => <HomeScreen  {...props} 
             text="Hello, let's begin!"
             data={listData} 
             add={addData}
             extra={updating}
          /> } 
        </Stack.Screen>
        {/* As a guidline */}
        <Stack.Screen name="DETAIL" component= {DetailScreen} /> 
        <Stack.Screen name= "TIMER" component = {TimerScreen} 
          options={({navigation,route}) => ({
          
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
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Initialise Navigation Stack
const Stack = createStackNavigator()
//CSS
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
