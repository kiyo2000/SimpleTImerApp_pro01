import React from 'react'
import { StyleSheet, Text, View  } from 'react-native';


export const TimerScreen = (props) => {
    return (
        <View>
            <Text style={styles.title}> - Timer Page - </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
      textAlign: 'center'
    },
  });