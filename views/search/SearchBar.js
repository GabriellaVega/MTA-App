import { TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function SearchBar(props) {

    return (<>
    <TextInput
        style={styles.input}
        onChange={props.onChangeHandler}
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