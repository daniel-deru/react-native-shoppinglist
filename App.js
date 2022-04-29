import { useState } from "react"
import { StyleSheet, SafeAreaView, FlatList, Text } from "react-native";
import Header from "./components/Header"
import ListItem from "./components/ListItem";



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
        <ListItem  item={item}/>
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
