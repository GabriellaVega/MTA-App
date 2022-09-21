import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SwitchViewButton from "./SwitchViewButton";

export default function Container(props) {
    return (
    <View style={props.title === "Search" ? styles.searchContainer : styles.favoritesContainer}>
      <View style={styles.contentHeader}>
        <Text style={styles.title}>{props.title}</Text>
        <SwitchViewButton />
      </View>
      {props.title === "Search" ? <SearchBar /> : null}
      <View style={styles.line}/>
      <View style={styles.resultsContent}/>
    </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
      backgroundColor: "rgba(240, 140, 250, 0.2)",
      padding: 20,
      minHeight: 600,
      minWidth: 600,
      marginLeft: 200,
      marginRight: 200,
      borderTopLeftRadius: 40,
      borderBottomRightRadius: 40
    },
    favoritesContainer: {
      backgroundColor: "rgba(20, 200, 50, 0.2)",
      padding: 20,
      minHeight: 600,
      minWidth: 600,
      marginLeft: 200,
      marginRight: 200
    },
    contentHeader: {
      flexDirection: "row",
      flex: 1
    },
    line: {
      borderBottomColor: "rgba(20, 160, 255, 0.8)",
      borderBottomWidth: 2,
      paddingTop: 10
    },
    resultsContent: {
      height: 500,
      maxHeight: 500,
      backgroundColor: "rgba(250, 250, 250, 0.5)",
      overflow: scroll,
      borderRadius: 20,
      marginTop: 20
    },
    title: {
      color: "rgba(20, 160, 255, 0.8)",
      fontWeight: "bold",
      fontSize: 30,
      flexDirection: "row",
      flex: 4
    }
  });