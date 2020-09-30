import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList } from 'react-native';
// Navigate one screen to another
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler';


export const HomeScreen = (props) => {
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


    return (
        <View style={styles.container}>
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
                <View style={styles.input}>
                    <TextInput placeholder="Amount" />
                </View>
            {/* As a guideline */}
            {/* <Button title="Go to Detail" onPress={() => {navigation.navigate()}} /> */}
            {/* Create Flatlist to render a list of items. Replaced Button above. */}
            {/* Receiving data via props from App.js */}
            <FlatList
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
      //fontWeight: 'bold',
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
        marginTop:15,
        padding: 10,
        borderColor:"blue",
        borderWidth: 1,
        borderRadius: 15, 
    },
  });