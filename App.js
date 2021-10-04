import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import Iziphumo from "./components/Display";

export default function App() {
  const [item, setItem] = useState([{}]);
  const [newArray, setNew] = useState([{}]);

  const handleSubmit = (val) => {
    if (newArray.items == "" && newArray.prio !== "high" && newArray.prio !== "High") {
      return alert("please enter an item!");
    } else if (newArray.items !== "") {
      let old = item;
      let newArr = [...old, val];
      setItem(newArr);
      setNew({
        items: "",
        prio: "",
      });
    }
  };
  const handleDelete = (val) => {
    setItem(item.filter((fil) => fil.items !== val));
  };

  return (
    <View>
      <View>
        <Text style={styles.heading}>Add a todo</Text>
      </View>
      <View style={styles.container}>
        <View style={{height:'15vh'}}>
          <Iziphumo data={item} delete={handleDelete} />
        </View>
        <TextInput
          style={styles.input}
          type="text"
          placeholder=" Enter an item"
          value={newArray.items}
          onChange={(e) => setNew({ ...newArray, items: e.target.value })}
        />
        <TextInput
          style={styles.input}
          type="text"
          placeholder="High/Medium/Low"
          value={newArray.prio}
          onChange={(e) => setNew({ ...newArray, prio: e.target.value })}
        />
        <View style={{ margin: "15px" }}>
          <Button
            style={styles.button}
            onPress={() => handleSubmit(newArray)}
            title="Add" 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B3A7",
    margin: "2px",
    padding: "28px",
  },
  heading: {
    backgroundColor: "#309F94",
    height: "57px",
    textAlign: "center",
    padding: "15px",
    margin: "2px",
    fontFamily: "Montserrat",
    fontSize: "25px",
    color: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    padding: "2px",
    margin: "2px",
  },
});
