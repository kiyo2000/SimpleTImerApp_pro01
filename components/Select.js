import React,{useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';

export const Select = (props) =>{
    const [selected, setSelected] = useState('Select Category')
    //Return View with a button
    return(
        <View>
            <TouchableOpacity>
                <Text>{selected}</Text>
                <Image 
                    style={selectStyles.selectImage} 
                    source={require('../assets/chevron-circle-down-solid.png')} 
                />
            </TouchableOpacity>
        </View>
    )
}

const selectStyles = StyleSheet.create({
    selectImage:{
        width: 20,
        height: 20,
        position: 'absolute',
    },
})