import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}> Welcome to the MTA App ! </Text>
      <Pressable
        style={[styles.button, styles.favorties]}
        title="Favorites"
        onPress={() => props.setCurrentView("favorites")}>
          <Text>Favorites</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.search]}
        title="Search"
        onPress={() => props.setCurrentView("search")}
        >
          <Text>Search</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "rgba(250, 250, 100, 0.4)",
    display: "flex",
    height: 800
  },
  favorties: {
    backgroundColor: "rgba(20, 200, 50, 0.2)",
    color: "rgba(250, 80, 160, 0.8)"
  },
  search: {
    backgroundColor: "rgba(240, 140, 250, 0.2)",
    color: "rgba(20, 160, 255, 0.8)"
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 50,
    margin: 10,
    textAlign: "center",
    justifyContent: "center",
    marginLeft: "40%"
  },
  title: {
    fontSize: 75,
    marginLeft: "20%",
  }
})