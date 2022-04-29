import { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({addItem}) => {
    const [text, setText] = useState()

    const add = () => {
        text ? addItem(text): Alert.alert("Error", "Please Enter Value")
        // console.log(text)
    }

  return (
    <View>
        <TextInput placeholder="Add Item" style={styles.input} onChangeText={textValue => setText(textValue)}/>
        <TouchableOpacity style={styles.btn} onPress={() => add()}>
            <Text style={styles.btnText}>
                <Icon name="plus" size={20}/>
                Add Item
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: "#c2bad8",
        padding: 9,
        margin: 5
    },
    btnText: {
        color: "darkslateblue",
        fontSize: 20,
        textAlign: 'center'
    }
})

export default AddItem