import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList } from 'react-native';
// Navigate one screen to another
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select'
//import {Picker} from '@react-native-community/picker'


export const HomeScreen = (props) => {
    //Temporary data holder for replacing with Firebase later on
    const selectItems = [
        {label: 'Study', value: "Speed_typing "},
        {label: 'Workout', value: "Stretching"},
        {label: 'Multi Purpose', value: "Cooking_01"},
    ]

    const [category, setCategory] = useState(null)
    //For Add
    const [amount, setAmount] = useState(0)
    const [note, setNote] = useState(null)
    
    //Represent useNavigation function
    const navigation = useNavigation()

    // Receive "item" from FlatList
    // Pass a list of data choosing by ID as a function
    // Return a component named ListItem
    // Pass the actual items and throws the entire objects /item ={item}
    const renderList = ({item}) => (
        <ListItem 
        id={item.id} 
        amount={item.amount} 
        category={item.category}
        note={item.note}
        clickHandler = {showDetail}
        item ={item}
        />
    )
    //Make the App to navigate by navigate method 
    // Pass item as a parameter.
    const showDetail = ( item ) =>{
        navigation.navigate("DETAIL", item)
    }

    //**
    //* Insert codes for Timer ---------------------------------------------
    //**
    const [time, setTime] = useState(0)
    const [paused, setPaused] = useState(true)
  
    // global reference for timer
    let timer = null
  
    useEffect(() => {
      if (!paused) {
        timer = setInterval(() => {
          setTime(time => time + 1);
        }, 1000)
        return () => clearInterval(timer)
      }
    })
    //** End of Timer code ---------------------------------------------- */

    return (


    
        <View style={styles.container}>
            <View style={styles.containerTimer}>
                    <Text style={styles.time}>{time} seconds</Text>
                    <TouchableOpacity style={styles.buttonTimer} onPress={() => {
                    setPaused(paused ? false : true)
                    }} >
                    {/* <Text>{paused ? "Start" : "Stop"}</Text> */}
                    <Text style={styles.mainButtontext}>{paused ? "Start" : "Stop"}</Text>
                    </TouchableOpacity>
                    <View style={styles.rowSaveDelete}>
                    <TouchableOpacity 
                        style={[{ display: paused && time > 0 ? "flex" : "none" }, 
                        styles.buttonDelete
                    ]}>
                        <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[{ display: paused && time > 0 ? "flex" : "none" }, 
                        styles.buttonSave
                        ]}>
                        <Text style={styles.saveText}>Save</Text>
                    </TouchableOpacity>
                    </View>
                </View>

            {/* <Text>{props.text}</Text> */}
            {/* <Text style={styles.title}> {props.text} </Text> */}
            {/* Previously: <Button title="Use timer ?" onPress = { () => {navigation.navigate("Timer")}} /> */}
            {/* Using TouchableOpacity instead of Button tag so that the colour of the title can be changed. */}
            <TouchableOpacity 
                style={styles.button}
                onPress={() => console.log("touchable opacity pressed")}//for debugging
                onPress = { () => {navigation.navigate("TIMER")}}
            >
                <Text style={styles.text}>Use Timer ?</Text>
            </TouchableOpacity>

                {/*Read text from screen  */}
                <View style={styles.container}>
                    {/* Change the text of amount */}
                    <TextInput 
                        style={styles.input} 
                        placeholder="Amount"
                        onChangeText={(amount) => setAmount(amount)}
                    />
                    <RNPickerSelect 
                        onValueChange={(value) => setCategory(value) }
                        items = { selectItems }
                        useNativeAndroidPickerStyle={false}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Notes"
                        onChangeText={(note) => setNote(note)}
                    />
                    <TouchableOpacity>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
            {/* As a guideline */}
            {/* <Button title="Go to Detail" onPress={() => {navigation.navigate()}} /> */}
            {/* Create Flatlist to render a list of items. Replaced Button above. */}
            {/* Receiving data via props from App.js */}
            <FlatList
                style={styles.flatlist}
                data = {props.data}
                renderItem ={renderList}
                keyExtractor = { item => item.id }
            />
        </View>
    )
}

//Define ListItem as a component for listing items
//Use TouchableOpacity and onPress to make components handle clicks
// and then pass the entire objects/items via the clickHandler function to DetailScreen.
const ListItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.clickHandler(props.item)}>
            <View style={styles.item}>
                <Text>{props.id}:</Text>
                <Text>${props.amount}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'blue',
      textAlign: 'center',
      fontSize: 20,
    },
    button: {
        alignItems: "center",
        backgroundColor: "yellow",
        padding: 7,
    },
    text: {
        color: "black",
        fontSize: 20,
    },
    container:{
        flex:1,
        paddingHorizontal: 10,
    },
    item: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderBottomWidth: 2,
        borderColor: "lightgray",
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    input: {
        fontSize: 20,
        padding: 10,
        borderColor:"blue",
        borderWidth: 1,
        borderRadius: 15, 
    },
    flatlist: {
        marginTop:25,
    },
  });