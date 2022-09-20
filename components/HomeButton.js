import { StyleSheet, Pressable, Text } from "react-native";

export default function HomeButton(props) {
    return (<>
    <Pressable style={styles.button} onPress={() => props.setCurrentView("home")}>
        <Text style={styles.text}>Home</Text>
    </Pressable>
    </>
    );
}

const styles = StyleSheet.create({
    button: {
      alignSelf: 'flex-start',
      backgroundColor: "rgba(250, 20, 70, 0.5)",
      padding: 5,
      marginTop: 20,
      marginLeft: 50
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: "white",
    },
  });