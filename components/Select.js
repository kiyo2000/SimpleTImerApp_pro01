import { storage } from 'firebase';
import React,{useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';

export const Select = (props) =>{
    const [selected, setSelected] = useState('Select Category')
    const [visible, setVisible] = useState(false)
    //Calling items from HomeScreen
    const Items = props.items.map((item,index) =>{
        return (
            <TouchableOpacity 
                style={selectStyles.selectItem}
                key={index} 
                onPress={() => {
                    setSelected(item.value)
                    setVisible(false)
                }}
                >
                 <Text>{item.label}</Text>
            </TouchableOpacity>
        )
    })

    return(
        <View>
            <TouchableOpacity 
                style={selectStyles.selectRow}
                onPress={() => setVisible(true)}
                >
                <Text>{selected}</Text>
                <Image 
                    style={selectStyles.selectImage} 
                    source={require('../assets/chevron-circle-down-solid.png')} 
                />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                visible = {visible}
            >
                <View>
                    <ScrollView>
                        {Items}
                    </ScrollView>
                </View>
            </Modal>
        </View>
    )
}

const selectStyles = StyleSheet.create({
    selectRow:{
        flexDirection: 'row',
        //position: 'absolute',
        justifyContent: 'space-between',
        padding: 10,
        width: '100%',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
    },

    selectImage:{
        width: 20,
        height: 20,
        //position: 'absolute',
    },
    selectItem:{
        paddingVertical:10,
        paddingHorizontal: 5,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 2,
    },
})