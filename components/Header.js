import { View, Text, StyleSheet } from "react-native"

const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.text}>Shopping List</Text>        
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: "20%",
        padding: 15,
        backgroundColor: 'firebrick'
    },
    text: {
        color: "white",
        fontSize: 23,
        textAlign: "center",
        padding: 10
    }
})

export default Header