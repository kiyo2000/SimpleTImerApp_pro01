import React from 'react'
import { SafeAreaView, StyleSheet, Text, View  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const TimerScreen = (props) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.viewTitle}>
                <Text> - Timer Page - </Text>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity>
                    <Text> - Press Button - </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        flex: 1,
    },

    viewTitle:{
        height: 30, 
        width:'100%', 
        backgroundColor: '#f59842',
        flex: 1,
    },

    title: {

    },

    viewButton:{
        flex: 2,
    },
    viewButtonText:{

    },

  });