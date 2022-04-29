import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.text}</Text>
            <Icon name="remove" size={30} color="red" />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: 'green',
        borderBottomWidth: 1,
        borderColor: "#eee"
    },
    listItemView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    listItemText: {
        fontSize: 18
    }
})

export default ListItem