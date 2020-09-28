import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
// Navigate one screen to another
import { useNavigation } from '@react-navigation/native'


export const HomeScreen = (props) => {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={styles.title}> {props.text} </Text>
            {/* <Button title="Use timer ?" onPress = { () => {navigation.navigate("Timer")}} /> */}

            <TouchableOpacity 
                style={styles.button}
                onPress={() => console.log("touchable opacity pressed")}//for debugging
                onPress = { () => {navigation.navigate("Timer")}}
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