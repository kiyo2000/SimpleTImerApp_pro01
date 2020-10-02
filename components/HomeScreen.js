import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList } from 'react-native';
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
        {label: 'Cooking', value: "cooking"},
        {label: 'Daily Routine', value: "daily"},
        {label: 'Multi Purpose', value: "multi purpose"},
    ]

    const [category, setCategory] = useState(null)
    const [amount, setText] = useState(null)
    const [note, setNote] = useState(null)
    //For validating entered values on the placeholders
    const [validText, setValidText]= useState(false)
    
    //Represent useNavigation function
    const navigation = useNavigation()
    // Validate if empty string is entered. 
    const validateText = (amount) => {
        if(amount !== null && amount !== ''){
            setValidText(true)
            setText(amount)
        }
        else{
            setValidText(false)
        }
    }

    //Send item data to the save button for adding to firebase.(Use timestamp as well.)
    const addItem = () => {
      const itemId = new Date().getTime()
      const itemText = amount
      const itemCategory = category
      const itemNote = note
      props.add({
        id: itemId,
        amount: itemText,
        category: itemCategory,
        note: itemNote,
      })
    }

    // Receive "item" from FlatList
    // Pass a list of data choosing by ID as a function
    // Return a component named ListItem
    // Pass the actual items and throws the entire objects /item ={item}
    const renderList = ({item}) => (
        <ListItem 
        id={item.id}
        time={item.time}
        amount={item.amount} 
        category={item.category}
        note={item.note}
        clickHandler = {showDetail}
        item ={item}
        />
    )
    //Make the App to navigate by navigate method 
    const showDetail = ( item ) =>{
        navigation.navigate("DETAIL", item)
    }

    //**
    //* Codes for the timer feature --------------------------------------- */
    //**
    const [time, setTime] = useState(0)
    const [paused, setPaused] = useState(true)
  
    // global reference
    let timer = null
  
    useEffect(() => {
      if (!paused) {
        timer = setInterval(() => {
          setTime(time => time + 1);
        }, 1000)
        return () => clearInterval(timer)
      }
    })
    //** End of Timer code ---------------------------------------------------------- */

    return (
        <View style={styles.containerMain}>
            {/* Insert render codes for the timer  feature ------------------------------- */}
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
                      onPress={()=> { addItem() }}
                      >
                          <Text style={timerStyle.saveText}>Save</Text>
                    </TouchableOpacity>
                  </View>
            </View>{/* End of render codes for the timer feature ----------------------- */}
            {/* Below code block is a previous idea of showing a timer in another screen
                , however giving it a try to Johannes's suggestion of implementing
                the timer on the home screen for interacting with an item list on the same screen. */}
            {/* <Text style={styles.title}> {props.text} </Text> */}
            {/* Using TouchableOpacity instead of Button tag so that the colour of the title can be changed. */}
            {/* <TouchableOpacity 
                style={styles.button}
                onPress={() => console.log("touchable opacity pressed")}//for debugging
                onPress = { () => {navigation.navigate("TIMER")
            }}>
                <Text style={styles.text}>Use Timer ?</Text>
            </TouchableOpacity> */}

            {/*Read texts from screen and pass to validate the text  */}
            <View style={styles.containerHolders}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Name the timer"
                    //onChangeText={(amount) => setAmount(amount)}
                    onChangeText={(amount) => validateText(amount)} 
                />
                  <Select items={selectItems} onSelect={setCategory}/>
                <TextInput 
                    style={styles.input} 
                    placeholder="Notes"
                    onChangeText={(note) => setNote(note)}
                />
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
                  //extraData = {props.extra}
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
                {/* <Text>{props.id} :</Text> */}
                <Text>Name:{props.amount}</Text>
                <Text>{props.id} :</Text>
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
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    text: {
        color: "black",
        fontSize: 20,
    },
    containerMain:{
       flex:1,
        paddingHorizontal: 10,
    },
    containerHolders:{
      //flex:1,
      //marginTop:100,
      paddingHorizontal: 5,
      paddingBottom:5,
  },
  input: {
    fontSize: 15,
    padding: 7,
    borderColor:"blue",
    borderWidth: 1,
    borderRadius: 15,
  },
    item: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 2,
        borderColor: "lightgray",
        flexDirection: 'row',
        justifyContent: "space-between",
    },
   
    flatlist: {
        marginTop: 5,
        paddingTop: 5,
    },
  });

  // CSS for Timer -------------------------------------------------------------------
  const timerStyle = StyleSheet.create({
    containerTimer: {
      //flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingBottom:10,
      marginBottom: 5,
      //justifyContent: 'center',
    },
    time: {
      fontSize: 20,
      marginTop: 10,
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
      marginTop: 27,
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