import { Pressable, Text, StyleSheet } from "react-native";
import { useState } from "react";
import StopModal from "./StopModal";

export default function AllStations(props) {
  return(props.displayStations.map(function callback(item) {
    const inFavorites = props.currentFavorites.includes(item["GTFS Stop ID"]);
  return(<Station key={item["GTFS Stop ID"]} daytimeRoutes={item["Daytime Routes"]} stopName={item["Stop Name"]} stopId={item["GTFS Stop ID"]} inFavorites={inFavorites} changeLastUpdated={props.changeLastUpdated}/>)
  }));
}

function Station(props) {
  const [showModal, changeModal] = useState(false);

  return(
    <>
      <Pressable
        onPress={() => {
          changeModal(true)
        }}
        >
        {props.daytimeRoutes.split(" ").map(function callback(train) {
          return(
            <Text key={train} style={styles.line}>{train}</Text>
          )
        })}
        <Text>{props.stopName}</Text>
      </Pressable>
      { showModal && <StopModal changeModal={changeModal} stopId={props.stopId} inFavorites={props.inFavorites} changeLastUpdated={props.changeLastUpdated}/> }
    </>
  )
}

const styles = StyleSheet.create({
  line: {
    paddingLeft: 10,
    flexDirection:'row'
  }
})