//import React from 'react'
import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

//Page for the timer 
export const TimerScreen = (props) => {
    const [time, setTime] = useState(0)
    const [paused, setPaused] = useState(true)
  
    // global reference for timer
    let timer = null
  
    // useEffect( () => {
    //   timer = setInterval( () => { setTime( time + 1 ) } , 1000)
    // })
  
    useEffect(() => {
      if (!paused) {
        timer = setInterval(() => {
          setTime(time => time + 1);
        }, 1000)
        return () => clearInterval(timer)
      }
    })
  
    return (
      <View style={styles.container}>
        <Text style={styles.time}>{time} seconds</Text>
        <TouchableOpacity style={styles.button} onPress={() => {
          setPaused(paused ? false : true)
        }} >
          {/* <Text>{paused ? "Start" : "Stop"}</Text> */}
          <Text style={styles.mainButtontext}>{paused ? "Start" : "Stop"}</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <TouchableOpacity style={[{ display: paused && time > 0 ? "flex" : "none" }, styles.delete]}>
            <Text style={styles.saveText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{ display: paused && time > 0 ? "flex" : "none" }, styles.save]}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    time: {
      fontSize: 32,
    },
    button: {
      marginTop: 20,
      backgroundColor: 'yellow',
      padding: 15,
      minWidth: 100,
      borderRadius: 50,
    },
    mainButtontext: {
        fontSize: 20,
        textAlign: "center",
    },
    row: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 15,
      justifyContent: 'space-between',
      padding: 10,
      width: '100%',
    },
    delete: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 50,
      },
    save: {
      backgroundColor: 'blue',
      padding: 15,
      borderRadius: 50,
    },
    saveText: {
      color: 'white',
      fontSize:15,
    },
});
// /** 
//  * Originial codes below -----------------------------------------------------------------------------------------
// */
//     //Set the initial time to 0 with using useState
//     const [ time, setTime ] = useState( 0 )
//     //Pause timer
//     const [ paused, pauseTime ] = useState( false )
//     // global reference for timer
//     let timer = null

//     //Display start button text and start timer
//     const startButton = () => {
//         return(
//             <TouchableOpacity
//                 style={styles.startButton}
//                 onPress={() => { 
//                     //console.log('Start button pressed')//for debugging
//                     setInterval( () => {
//                         if(!paused){
//                         //Display a value 0 and start counting up every thousand second.
//                         setTime(time => time + 1000); 
//                         console.log('setInterval() is working');//for debugging
//                         }   
//                     }, 1000);
//                 }}>
//                     <Text style={styles.startButtonText}>START</Text>
//             </TouchableOpacity>
//         );
//     }
//     // Display running timmer
//     const timerRunning = () => {
//         return(
//             <TouchableOpacity
//                 style={styles.startButton}
//                 onPress={() => { 
//                     console.log('button pressed')//for debugging
//                     //Below code still won't stop the timer
//                     pauseTime( { paused: !paused, }); //  paused = true 
//                     console.log('the value of paused is: ', paused ); //for debugging
//                     return () => clearInterval(timer)
//                 }}>
//                     <Text style={styles.startButtonText}>{time}</Text>
//             </TouchableOpacity>
//         );
//     }

//     //Display title text and start button
//     return (
        
//         <View style={styles.mainView}>
//             <View style={styles.viewTitle}>
//                 <Text style={styles.titleText}>Let's Start!</Text>
//             </View>

//             <View style={styles.viewButton}>
//                 {/* Show the running timer if the value of time is greater than 0 */}
//                 {time > 0 ? timerRunning() : startButton() }           
//             </View>
//         </View>
//     )
//}
//End of original code -------------------------------------------------------------------------------------------


/**
 * Original CSS --------------------------------------------------------------------------------------------------
 */
//******* CSS ***********
// const styles = StyleSheet.create({
//     mainView:{
//         alignItems: 'center',
//         flex: 1,
//     },

//     viewTitle:{
//         flex: 1,
//     },

//     titleText: {
//         paddingTop: 30,
//         textAlign: 'center',
//         fontSize: 50,
//         color: '#03fca5',
//         fontWeight: 'bold',
//     },

//     viewButton:{
//         flex: 2,
//         //justifyContent: 'center',
//         //backgroundColor: '#03f765',
//     },

//     startButton:{
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#f59842',
//         height: 260,
//         width: 260,
//         borderRadius: 130, 
//     },


//     startButtonText:{
//         fontSize: 50,
//         color: '#ffffff',
//         fontWeight: 'bold',
//     },

//   });
  //End of original CSS ------------------------------------------------------------------------------------------