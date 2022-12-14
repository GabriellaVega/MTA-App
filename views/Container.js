import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import SearchBar from "./search/SearchBar";
import SwitchViewButton from "./SwitchViewButton";

export default function Container(props) {
  return (
  <View 
  style={[styles.container, props.containerStyle]}>
    <View style={styles.contentHeader}>
      <Text style={styles.title}>{props.title}</Text>
      <SwitchViewButton />
    </View>
    {props.subtitle}
    <View style={styles.line}/>
    <View style={styles.resultsContent}>
      {props.children}
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    minHeight: 600,
    minWidth: 600,
    marginLeft: 200,
    marginRight: 200,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40
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
    overflow: "scroll",
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