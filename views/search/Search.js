import { Button, Text, View, StyleSheet, TextInput } from "react-native";
import HomeButton from "../HomeButton";
import Container from "../Container";
import stations from "../../assets/Stations.json";
import Station from "./Station";

function AllStations() {
  return(stations.map(function callback(item) {
    return(<Station key={item["GTFS Stop ID"]} daytimeRoutes={item["Daytime Routes"]} stopName={item["Stop Name"]}/>)
  }))

}

export default function Search(props) {
  return (<>
    <HomeButton setCurrentView={props.setCurrentView}/>
    <Container 
      title="Search" 
      containerStyle={styles.searchContainer} 
      content={<AllStations/>}
    />
  </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "rgba(240, 140, 250, 0.2)"
  }
})