import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

export default function Container(props) {
    return (
    <View style={props.title === "Search" ? styles.searchContainer : styles.favoritesContainer}>
      <View style={styles.contentHeader}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.button}>
          <Pressable style={styles.allButton}>All</Pressable>
          <Pressable style={styles.trainsButton}>Trains</Pressable>
          <Pressable style={styles.stationsButton}>Stations</Pressable>
        </View>
      </View>
      
      {props.title === "Search" ? <TextInput
        style={styles.input} 
        placeholder="Search for subway lines and stations"
      /> : null}
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
      marginRight: 200
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
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: "white"
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
    },
    allButton: {
      backgroundColor: "rgba(20, 160, 255, 0.8)",
      flex: 1,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      textAlign: "center",
      paddingTop: 8,
      paddingBottom: 8
    },
    trainsButton: {
      backgroundColor: "rgba(20, 160, 255, 0.8)",
      flex: 1,
      paddingTop: 8,
      paddingBottom: 8
    },
    stationsButton: {
      backgroundColor: "rgba(20, 160, 255, 0.8)",
      flex: 1,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      paddingTop: 8,
      paddingBottom: 8
      
    },
    button: {
      flexDirection: "row",
      justiftContent: "flex-end",
      flex: 1
    }

  });