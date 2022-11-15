import { Button, Text, StyleSheet } from "react-native";
import HomeButton from "./HomeButton";
import Container from "./Container";

export default function Favorites(props) {
  return (<>
    <HomeButton setCurrentView={props.setCurrentView}/>
    <Container title="Favorites" containerStyle={styles.favoritesContainer}/>
    </>
  );
}

const styles = StyleSheet.create({
  favoritesContainer: {
    backgroundColor: "rgba(20, 200, 50, 0.2)"
  }
});