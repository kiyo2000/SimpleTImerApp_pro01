import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

// Show start button.It starts the interval timer method setInterval() once it's pressed.
const startButton = () => {
    return(
        <TouchableOpacity
            style={styles.startButton}
            onPress={() => { 
                console.log('Start button pressed!')
                setInterval( () =>{
                    console.log('This will run every second!');
                }, 1000);
            }}>
        <Text style={styles.startButtonText}>START</Text>
    </TouchableOpacity>
    );
}

const runTimerButton = () =>{
    return(
        <TouchableOpacity
            style={styles.startButton}
            onPress={() => { 
                console.log('button pressed!')
            }}>
        <Text style={styles.startButtonText}>00:00:00</Text>
    </TouchableOpacity>
    );
}

//Page for the timer 
export const TimerScreen = (props) => {


    return (
        <View style={styles.mainView}>
            <View style={styles.viewTitle}>
                <Text style={styles.titleText}>Let's Start!</Text>
            </View>

            <View style={styles.viewButton}>
               {startButton()}
            </View>
        </View>
    )
}

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