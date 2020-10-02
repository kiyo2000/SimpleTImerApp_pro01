import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { DateFormat } from './DateFormat'

export const DetailScreen = ( props ) =>{
    const [amount,setAmount] = useState(props.route.params.amount)
    const [editing,setEditing] = useState(false)

    return(
        <View>
            {/* Display id via route */}
            <Text style={styles.amount}>Timer Name: {props.route.params.amount}</Text>
            {/* <TextInput style={styles.amount} placeholder={amount} /> */}
            <Text style={[styles.amount, { display: editing ? 'none' : 'flex'} ]}>
               Name:{amount}
            </Text>
            {/* ISSUE!: textInput only allows to enter 1 string... */}
            <TextInput 
                style={[styles.amount, {display: editing ? 'flex' : 'none'}]} 
                placeholder={amount} 
                onChangeText={ (amount) => { setAmount(amount) }}
            />
            <Button 
                title={ editing? "save" : "edit" } 
                onPress={ () => { editing ? setEditing(false) : setEditing(true) } } 
            />
            <DateFormat date={props.route.params.id} styling={styles.date} />
            <Text>Time: {props.route.params.time}s</Text>
            <Text>Id: {props.route.params.id}</Text>
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
    amount: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: '700',
      },
    date: {
      textAlign: 'center',
      marginVertical: 10,
      fontWeight: '700',
    },
  }) 