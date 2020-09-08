import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import { useNavigatinon } from '@react-navigation/native'

export const AuthScreen = ( props ) => {
    //use hook to show different screens\
    const [login, setLogin] = useState(false)

    if (!login) {
        return (
            // register view
            <View style={styles.container}>
                <Text style={styles.title}>- SIGNUP -</Text>
                <TextInput style={styles.input} placeholder="you@email.com"  />
                <TextInput
                    style={styles.input}
                    placeholder="min 6 characters"
                    secureTextEntry={true} 
                />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>- SIGNUP -</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.altText}>Already have an account?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.altButton}>
                <Text style={styles.altButtonText}>Sign In</Text>
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

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 15,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f59842',
        textAlign: 'center',
        marginTop: 15,
    },

    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#f59842',
        marginVertical: 25,
    },

    button: {
        padding: 10,
        backgroundColor: '#f59842',
    },

    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    altText :{
        color: '#03fca5',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 30,
    },

    altButton: {
        marginTop: 10,
        padding: 10,
    },

    altButtonText: {
        color: '#03fca5',
        fontSize: 18,
        borderColor: '#03fca5',
        textAlign: 'center',
    }


})