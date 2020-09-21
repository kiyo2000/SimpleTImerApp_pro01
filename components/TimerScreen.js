//import React from 'react'
import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';



// Show start button.It starts the interval timer method setInterval() once it's pressed.
// startButton = () => {
//     return(
//         <TouchableOpacity
//             style={styles.startButton}
//             onPress={() => { 
//                 console.log('Start button pressed')//for debugging
//                 setInterval( () =>{
//                     console.log('setInterval() is working');//for debugging
//                     setTime(time + 1000); 
//                 }, 1000);
//             }}>
//         <Text style={styles.startButtonText}>START</Text>
//     </TouchableOpacity>
//     );
// }

//Not sure if this works or not.
// const runTimerButton = () =>{
//     return(
//         <TouchableOpacity
//             style={styles.startButton}
//             onPress={() => { 
//                 console.log('button pressed')
//             }}>
//         <Text style={styles.startButtonText}>00:00:00</Text>
//     </TouchableOpacity>
//     );
// }

//Page for the timer 
export const TimerScreen = (props) => {

    //Set the state time to 0 with using useState
    const [ time, setTime ] = useState( 0 )
    const [ paused, pauseTime ] = useState( false )

    //Display start button text and start timer
    const startButton = () => {
        return(
            <TouchableOpacity
                style={styles.startButton}
                onPress={() => { 
                    //console.log('Start button pressed')//for debugging
                    setInterval( () => {
                        if(!paused){
                            //Display a value 0 and start counting up every thousand second.
                        setTime(time => time + 1000); 
                        console.log('setInterval() is working');//for debugging
                        }
                        
                    }, 1000);
                }}>
                    <Text style={styles.startButtonText}>START</Text>
            </TouchableOpacity>
        );
    }
    // Display running timmer
    const timerRunning = () => {
        return(
            <TouchableOpacity
                style={styles.startButton}
                onPress={() => { 
                    console.log('Start button pressed')//for debugging
                    //const {paused} = time; // paused = false
                    pauseTime(
                        paused = true // !paused = !false = true 
                    );
                    // setState({
                    //     paused: !paused, // !paused = !false = true 
                    // });
                    console.log('paused', paused ); //for debugging
                }}>
                    <Text style={styles.startButtonText}>{time}</Text>
            </TouchableOpacity>
        );
    }


    //Display title text and start button
    return (
        
        <View style={styles.mainView}>
            <View style={styles.viewTitle}>
                <Text style={styles.titleText}>Let's Start!</Text>
            </View>

            <View style={styles.viewButton}>
                {/* Show the running timer if the value of time is greater than 0 */}
                {time > 0 ? timerRunning() : startButton() }
               {/* Below lines are old reference for learnig: 
               {startButton()}
               <Text>Counter: {time}</Text> 
               */}            
            </View>
        </View>
    )
}

//******* CSS ***********
const styles = StyleSheet.create({
    mainView:{
        alignItems: 'center',
        flex: 1,
    },

    viewTitle:{
        flex: 1,
    },

    titleText: {
        paddingTop: 30,
        textAlign: 'center',
        fontSize: 50,
        color: '#03fca5',
        fontWeight: 'bold',
    },

    viewButton:{
        flex: 2,
        //justifyContent: 'center',
        //backgroundColor: '#03f765',
    },

    startButton:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f59842',
        height: 260,
        width: 260,
        borderRadius: 130, 
    },


    startButtonText:{
        fontSize: 50,
        color: '#ffffff',
        fontWeight: 'bold',
    },

  });