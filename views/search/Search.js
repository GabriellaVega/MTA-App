import { StyleSheet } from "react-native";
import { useState } from "react";
import HomeButton from "../HomeButton";
import Container from "../Container";
import stations from "../../assets/Stations.json";
import Station from "./Station";
import SearchBar from "./SearchBar";

function AllStations(props) {
  return(props.displayStations.map(function callback(item) {
    return(<Station key={item["GTFS Stop ID"]} daytimeRoutes={item["Daytime Routes"]} stopName={item["Stop Name"]}/>)
  }))
}

export default function Search(props) {
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
      content={<AllStations displayStations={displayStations}/>}
    />
  </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "rgba(240, 140, 250, 0.2)"
  }
})