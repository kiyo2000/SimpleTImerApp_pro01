import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import { useNavigatinon, useNavigation } from '@react-navigation/native'

export const AuthScreen = ( props ) => {
    //use hook to show different screens\
    const [login, setLogin] = useState(false)
    // access the property of useNavigation
    const navigation = useNavigation()

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
                    <Text style={styles.altText}>Already have an account?</Text>
                <TouchableOpacity 
                    style={styles.altButton}
                    onPress={ () => { 
                        setLogin(true) 
                        navigation.setOptions({title: "SIGNIN"})
                    } }
                >
                    <Text style={styles.altButtonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else {
        return (
        // Sign in view
            <View style={styles.container}>
                <Text style={styles.title}>- SIGNIN -</Text>
                <TextInput style={styles.input} placeholder="you@email.com"  />
                <TextInput
                    style={styles.input}
                    placeholder="your password"
                    secureTextEntry={true} 
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>- SIGNIN -</Text>
                </TouchableOpacity>
                    <Text style={styles.altText}>Don't have an account?</Text>
                <TouchableOpacity 
                    style={styles.altButton}
                    onPress={ () => { 
                        setLogin(false) 
                        navigation.setOptions({title: "SIGNUP"})
                    } }
                >
                    <Text style={styles.altButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
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