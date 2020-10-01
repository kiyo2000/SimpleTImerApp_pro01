import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList } from 'react-native';
// Navigate one screen to another
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler';
//Commented out for using Select.js
//import RNPickerSelect from 'react-native-picker-select'
import {Select} from './Select'



export const HomeScreen = (props) => {
    //Temporary data holder for replacing with Firebase later on
    const selectItems = [
        {label: 'Study', value: "study "},
        {label: 'Workout', value: "workout"},
        {label: 'Multi Purpose', value: "multi purpose"},
    ]

    const [category, setCategory] = useState(null)
    const [amount, setAmount] = useState(0)
    const [note, setNote] = useState(null)
    //For validating entered values on the placeholders
    const [validText, setValidText]= useState(false)
    
    //Represent useNavigation function
    const navigation = useNavigation()
    // Validate if empty string is entered. 
    const validateText = (amount) => {
        if(amount !== null && amount !== ''){
            setValidText(true)
        }
        else{
            setValidText(false)
        }
    }

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
            {/* Insert render codes for Timer ---------------------------------------- */}
            <View style={timerStyle.containerTimer}>
        <Text style={timerStyle.time}>{time} seconds</Text>
        <TouchableOpacity style={timerStyle.buttonTimer} onPress={() => {
          setPaused(paused ? false : true)
        }} >
          {/* <Text>{paused ? "Start" : "Stop"}</Text> */}
          <Text style={timerStyle.mainButtontext}>{paused ? "Start" : "Stop"}</Text>
        </TouchableOpacity>
        <View style={timerStyle.rowSaveDelete}>
          <TouchableOpacity 
            style={[{ display: paused && time > 0 ? "flex" : "none" }, 
            timerStyle.buttonDelete
            ]}
            onPress={()=>{
                setTime(0)
            }}>
                <Text style={timerStyle.deleteText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[{ display: paused && time > 0 ? "flex" : "none" }, 
            validText && category ? timerStyle.buttonSave : timerStyle.buttonDisabled
            ]}
            disabled={validText && category ? false : true }
            >
                <Text style={timerStyle.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
        {/* End of render code for Timer ---------------------------------------- */}

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
                    //onChangeText={(amount) => setAmount(amount)}
                    onChangeText={(amount) => validateText(amount)}
                />
                <Select items={selectItems} onSelect={setCategory}/>
                <TextInput 
                    style={styles.input} 
                    placeholder="Notes"
                    onChangeText={(note) => setNote(note)}
                />
                {/* Wroks as Button: Read the value from placeholders and submit the value */}
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
        marginBottom: 10,
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
        paddingVertical: 15,
        borderBottomWidth: 2,
        borderColor: "lightgray",
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    input: {
        fontSize: 15,
        padding: 7,
        borderColor:"blue",
        borderWidth: 1,
        borderRadius: 15, 
    },
    flatlist: {
        marginTop: 100,
    },
  });

  // CSS for Timer -------------------------------------------------------------------
  const timerStyle = StyleSheet.create({
    containerTimer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    time: {
      fontSize: 15,
    },
    buttonTimer: {
      marginTop: 5,
      backgroundColor: 'yellow',
      padding: 5,
      minWidth: 100,
      borderRadius: 50,
    },
    mainButtontext: {
        fontSize: 15,
        textAlign: "center",
    },
    rowSaveDelete: {
      marginTop: 10,
      flexDirection: 'row',
      position: 'absolute',
      //bottom: 15,
      justifyContent: 'space-between',
      padding: 10,
      width: '100%',
    },
    buttonDelete: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 50,
        minWidth: 100,//Added
        marginTop: 5,//Added
      },
    buttonSave: {
      backgroundColor: 'blue',
      padding: 5,
      borderRadius: 50,
      minWidth: 100,//Added
      marginTop: 5,//Added
    },
    buttonDisabled:{
        backgroundColor: '#dddddd',
        padding: 5,
        borderRadius: 50,
        minWidth: 100,//Added
        marginTop: 5,//Added 
    },
    deleteText: {
      color: 'white',
      fontSize:15,
      textAlign: "center",//Added
    },
    saveText: {
      color: 'white',
      fontSize:15,
      textAlign: "center",//Added
    },
});