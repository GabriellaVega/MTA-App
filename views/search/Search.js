import { StyleSheet } from "react-native";
import { useState } from "react";
import HomeButton from "../HomeButton";
import Container from "../Container";
import stations from "../../assets/Stations.json";
import AllStations from "../common/AllStations";
import SearchBar from "./SearchBar";
import useFavorites from "../common/useFavorites";

export default function Search(props) {
  const [favoriteStations, changeLastUpdated] = useFavorites();
  const [displayStations, changeDisplayStations] = useState(stations);
  function handleDisplayChange(event) {
    const inputText = event.target.value;

    const result = stations.filter( item => {
      return item["Stop Name"].toLowerCase().includes(inputText.toLowerCase());
    })

    changeDisplayStations(result);
  }

  return (<>
    <HomeButton setCurrentView={props.setCurrentView}/>
    <Container 
      title="Search" 
      subtitle={<SearchBar onChangeHandler={handleDisplayChange}/>}
      containerStyle={styles.searchContainer} 
    >
      <AllStations displayStations={displayStations} currentFavorites={favoriteStations.map((item) => {
        return item["GTFS Stop ID"]
      })} changeLastUpdated={changeLastUpdated}/>
    </Container>
  </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "rgba(240, 140, 250, 0.2)"
  }
})