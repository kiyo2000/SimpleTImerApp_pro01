import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList } from 'react-native';
// Navigate one screen to another
import { useNavigation } from '@react-navigation/native'


export const HomeScreen = (props) => {
    const navigation = useNavigation()
    // Passing a list of data choosing by ID as a function
    const renderList = ({item}) => (
        <ListItem id={item.id} amount={item.amount} category={item.category} />
    )
    return (
        <View>
            {/* <Text>{props.text}</Text> */}
            <Text style={styles.title}> {props.text} </Text>
            {/* Previously: <Button title="Use timer ?" onPress = { () => {navigation.navigate("Timer")}} /> */}
            {/* Using TouchableOpacity instead of Button tag so that the colour of the title can be changed. */}
            <TouchableOpacity 
                style={styles.button}
                onPress={() => console.log("touchable opacity pressed")}//for debugging
                onPress = { () => {navigation.navigate("TIMER")}}
            >
                <Text style={styles.text}>Use Timer ?</Text>
            </TouchableOpacity>

            {/* As a guideline */}
            {/* <Button title="Go to Detail" onPress={() => {navigation.navigate()}} /> */}
            {/* Create Flatlist to render a list of items. Replaced Button above. */}
            <FlatList
                data = {props.data}
                renderItem ={renderList}
                keyExtractor = { item => item.id }
            />
        </View>
    )
}

//Create a component for listing items
const ListItem = (props) => {
    return (
        <View style={styles.item}>
            <Text>{props.id}</Text>
            <Text>{props.amount}</Text>
            <Text>{props.category}</Text>
        </View>
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
        padding: 3,
    },
    text: {
        color: "black",
        fontSize: 15,
    },
    item: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderBottomWidth: 2,
        borderColor: "lightgray",
        flexDirection: 'row',
        justifyContent: "space-between",
    },
  });