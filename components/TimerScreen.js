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

    //set the state time to 0 with using useState
    //How can I call this hook from a function outside via the function inside?? 
    const [ time, setTime ] = useState( 0 )

    //Display 
    const startButton = () => {
        return(
            <TouchableOpacity
                style={styles.startButton}
                onPress={() => { 
                    console.log('Start button pressed')//for debugging
                    setInterval( () => {
                        //Still not correct...
                        //Supposed to be display a value 0 and start counting up every thousand second.
                        setTime(time => time + 1000); // Still not correct...

                        console.log('setInterval() is working');//for debugging
                    }, 1000);
                }}>
                    <Text style={styles.startButtonText}>START</Text>
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
               
               {startButton()}
               <Text>Counter: {time}</Text>
               
               
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
        //backgroundColor: '#03f765',
        //justifyContent: 'center',
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