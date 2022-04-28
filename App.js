import Header from "./components/Header";
import { useState } from "react"
import { StyleSheet, SafeAreaView, FlatList, Text } from "react-native";



export default function App() {
  const [ items, setItems] = useState([
    {id: 1, text: "Milk"},
    {id: 2, text: "Eggs"},
    {id: 3, text: "Coffee"},
    {id: 4, text: "Candy"},
  ])
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList data={items} renderItem={({item}) => (
        <Text>{item.text}</Text>
      )}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    paddingTop: 30
   
  }
});
