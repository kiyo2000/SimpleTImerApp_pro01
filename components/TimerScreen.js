import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';


export const TimerScreen = (props) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.viewTitle}>
                <Text style={styles.titleText}>Let's Start!</Text>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity
                    style={styles.startButton}
                    onPress={() => { 
                        console.log('button pressed!')
                    }}>
                    <Text style={styles.startButtonText}>START</Text>
                </TouchableOpacity>
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
        paddingTop: 50,
        textAlign: 'center',
        fontSize: 50,
        color: '#f59842',
        fontWeight: 'bold',
    },

    viewButton:{
        flex: 2,
        //backgroundColor: '#03f765',
        justifyContent: 'center',
    },

    startButton:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#03fca5',
        height: 300,
        width: 300,
        borderRadius: 150, 
    },


    startButtonText:{
        fontSize: 50,
        color: '#ffffff',
        fontWeight: 'bold',
    },

  });