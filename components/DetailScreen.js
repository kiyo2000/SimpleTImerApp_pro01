import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { DateFormat } from './DateFormat'

export const DetailScreen = ( props ) =>{
    const [amount,setAmount] = useState(props.route.params.amount)
    const [editing,setEditing] = useState(false)
    
    return(
        <View>
            {/* Display id via route */}
            <DateFormat date={props.route.params.id} styling={styles.date} />
            <Text>Id: {props.route.params.id}</Text>
            <Text>Name of Timer : {props.route.params.amount}</Text>
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