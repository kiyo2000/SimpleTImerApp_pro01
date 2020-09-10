import React from 'react'
import { SafeAreaView, StyleSheet, Text, View  } from 'react-native';


export const TimerScreen = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.viewTitle}>
                <Text style={styles.title}> - Timer Page - </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewTitle:{
        height: 30, 
        width:'100%', 
        backgroundColor: '#f59842'
    },

    title: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });