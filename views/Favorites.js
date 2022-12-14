import { StyleSheet } from "react-native";
import HomeButton from "./HomeButton";
import Container from "./Container";
import AllStations from "./common/AllStations";
import useFavorites from "./common/useFavorites";

export default function Favorites(props) {
  const [displayStations, changeLastUpdated] = useFavorites();
  return (<>
    <HomeButton setCurrentView={props.setCurrentView}/>
    <Container title="Favorites" containerStyle={styles.favoritesContainer}>
      <AllStations displayStations={displayStations} currentFavorites={displayStations.map((item) => {
        return item["GTFS Stop ID"]
      })} changeLastUpdated={changeLastUpdated}/>
    </Container>
    </>
  );
}

const styles = StyleSheet.create({
  favoritesContainer: {
    backgroundColor: "rgba(20, 200, 50, 0.2)"
  }
});