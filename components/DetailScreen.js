import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DateFormat } from './DateFormat'

export const DetailScreen = ( props ) =>{
    return(
        <View>
            <Text>Detail page</Text>
            {/* Display id via route */}
            {/* <Text>Id: {props.route.params.id}</Text> */}
            {/* <Text>Amount: {props.route.params.amount}</Text> */}
            <Text>Name of Timer : {props.route.params.amount} style={styles.nameTimer}</Text>
            <DateFormat date={props.route.params.id} style={styles.date} />
            <Text>Category: {props.route.params.category}</Text>
            <Text>Note: {props.route.params.note}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nameTimer: {
      textAlign: 'center',
      fontSize: 32,
      marginVertical: 15,
    },
    date: {
      textAlign: 'center',
      marginVertical: 10,
      fontWeight: '700',
    },
  }) 