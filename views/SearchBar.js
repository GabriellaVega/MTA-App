import { TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function SearchBar() {
    const [inputText, setInputText] = useState("");
    function handleChange(event) {
      setInputText(event.target.value)
    }
    return (<>
    <TextInput
        style={styles.input}
        value={inputText}
        onChange={handleChange}
        placeholder="Search for subway lines and stations"
    />
    </>)
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white"
      }
})