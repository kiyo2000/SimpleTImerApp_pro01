import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useNavigatinon } from '@react-navigation/native'

export const AuthScreen = ( props ) => {
    //use hook to show different screens\
    const [login, setLogin] = useState(false)

    if (!login) {
        return (
            // register view
            <View>
                <Text>- SIGNUP -</Text>
                <TextInput placeholder="you@email.com"  />
                <TextInput 
                    placeholder="min 6 characters"
                    secureTextEntry={true} 
                />
            <TouchableOpacity>
                <Text>- SIGNUP -</Text>
            </TouchableOpacity>
            </View>
        )
    }
    else {
        return
        // login view
        <View> </View>
    }
}