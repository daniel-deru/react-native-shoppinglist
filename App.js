import { useState } from "react"
import { StyleSheet, View, FlatList, Text, ScrollView } from "react-native";

import Header from "./components/Header"
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";



export default function App() {
  const [ items, setItems] = useState([
    {id: 1, text: "Milk"},
    {id: 2, text: "Eggs"},
    {id: 3, text: "Coffee"},
    {id: 4, text: "Candy"},
  ])

  const deleteItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const addItem = (text) => {
    setItems(prevItems => [...prevItems, {id: prevItems.length+1, text}])
  }
  return (
    <ScrollView>
        <View style={styles.container}>
            <Header />
          <AddItem addItem={addItem}/>
          <FlatList data={items} renderItem={({item}) => (
            <ListItem key={item.id}  item={item} deleteItem={deleteItem} />
          )}/>
        </View>
      </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    paddingTop: 30
   
  }
});
