import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export const HomeScreen = (props) => {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={styles.title}> - Home Screen - </Text>
            <Button title="Use Timer" onPress = { () => {navigation.navigate("Timer")}} />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
      textAlign: 'center'
    },
  });