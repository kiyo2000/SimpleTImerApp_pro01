import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const DetailScreen = ( props ) =>{
    return(
        <View>
            <Text>Detail page</Text>
            {/* Display id via route */}
            <Text>ID: {props.route.params.id}</Text>
            <Text>Amount: {props.route.params.amount}</Text>
            <Text>Category: {props.route.params.category}</Text>
            <Text>Note: {props.route.params.note}</Text>
        </View>
    )
}