import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
// Navigate one screen to another
import { useNavigation } from '@react-navigation/native'


export const HomeScreen = (props) => {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={styles.title}> {props.text} </Text>
            <Button color="black" title="Use timer ?" labelStyle={{ color: "black", fontSize: 18 }} onPress = { () => {navigation.navigate("Timer")}} >
                
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'blue',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });