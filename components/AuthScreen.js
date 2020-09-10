import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import { useNavigatinon, useNavigation } from '@react-navigation/native'

export const AuthScreen = ( props ) => {
    //use hook to show different screens\
    const [login, setLogin] = useState(false)
    // hooks for validation
    const [validEmail,setValidEmail] = useState(false)
    const [validPassword,setValidPassword] = useState(false)
    // hooks for referecning user credentials
    const [email,setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    
    // access the property of useNavigation
    const navigation = useNavigation()

    // validate email & password
    const validateEmail = (email) => {
        if(email.indexOf('@') > 0 && email.indexOf('.') > 0){
            setValidEmail( true)
            setEmail( email )
        }
        else {
            setValidEmail( false )
        }
    }
    const validatePassword = (password) => {
        if( password.length >= 6 ){
            setValidPassword( true)
            setPassword( password )
        }
        else {
            setValidPassword( false )
        }
    }
    
    if (!login) {
        return (
            // register view
            <View style={styles.container}>
                <Text style={styles.title}>- SIGNUP -</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="you@email.com"  
                    onChangeText={(email) => validateEmail(email) } //passing parameter to be not empty 
                />
                <TextInput
                    style={styles.input}
                    placeholder="min 6 characters"
                    secureTextEntry={true} 
                    onChangeText={(password) => validatePassword(password) } //passing parameter to be not empty
                />
                <TouchableOpacity 
                  //style={styles.button} -> changed to below. styles can be loaded for true/false purpose
                    style={ !validEmail || !validPassword ?  styles.buttonDisabled : styles.button }
                    // disable the button function by seting useState false.
                    disabled={ !validEmail || !validPassword ? true : false }
                    onPress ={ () => { props.signup( 'signup', email, password) } }
                >
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
                <TextInput 
                    style={styles.input} 
                    placeholder="you@email.com"  
                    onChangeText={ (email) => { setEmail(email) }  } //update email
                />
                <TextInput
                    style={styles.input}
                    placeholder="your password"
                    secureTextEntry={true} 
                    onChangeText= { (password) =>{setPassword(password)} } //update password
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => { props.signup( 'login', email, password  ) } }
                >
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

    buttonDisabled: {
        padding: 10,
        backgroundColor: '#888888',
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