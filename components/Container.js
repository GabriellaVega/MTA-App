import { View, Text, TextInput } from "react-native";

export default function Container(props) {
    return (
    <View style={styles.container}>
      <Text style={styles.title}> Search </Text>
      <TextInput
        style={styles.input} 
        placeholder="Search for subway lines and stations"
      />
      <View style={styles.line}/>
      <View style={styles.resultsContent}/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgba(240, 140, 250, 0.2)",
      padding: 20,
      minHeight: 600,
      minWidth: 600,
      marginLeft: 200,
      marginRight: 200
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
      fontSize: 30
    }
  });