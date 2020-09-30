import React,{useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';

export const Select = (props) =>{
    const [selected, setSelected] = useState('Select Category')
    //Return View with a button
    return(
        <View>
            <TouchableOpacity>
                <Text>{selected}</Text>
                <Image source={require('../assets/chevron-circle-down-solid.png')} />
            </TouchableOpacity>
        </View>
    )
}