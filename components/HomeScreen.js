import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, Flatlist } from 'react-native';
// Navigate one screen to another
import { useNavigation } from '@react-navigation/native'


export const HomeScreen = (props) => {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={styles.title}> {props.text} </Text>

            {/* As a guideline */}
            {/* <Button title="Go to Detail" onPress={() => {navigation.navigate()}} /> */}
            {/* Previously: <Button title="Use timer ?" onPress = { () => {navigation.navigate("Timer")}} /> */}
            {/* Using TouchableOpacity instead of Button tag so that the colour of the title can be changed. */}
            <TouchableOpacity 
                style={styles.button}
                onPress={() => console.log("touchable opacity pressed")}//for debugging
                onPress = { () => {navigation.navigate("TIMER")}}
            >
                <Text style={styles.text}>Use Timer ?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'blue',
      textAlign: 'center',
      fontSize: 20,
      //fontWeight: 'bold',
    },
    button: {
        alignItems: "center",
        backgroundColor: "yellow",
        padding: 3,
    },
    text: {
        color: "black",
        fontSize: 15,
    },
  });