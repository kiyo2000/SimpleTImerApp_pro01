import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.title}> - Home Screen - </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
      textAlign: 'center'
    },
  });