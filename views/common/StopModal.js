import { Modal, Text, StyleSheet, Pressable } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



async function saveStop(stopId, changeLastUpdated) {
  const jsonPreviousFavorites = await AsyncStorage.getItem('favorites');
  if (jsonPreviousFavorites === null) {
    const jsonValue = JSON.stringify([stopId]);
    await AsyncStorage.setItem("favorites", jsonValue);
  } else {
    const previousFavorites = JSON.parse(jsonPreviousFavorites);
    const currentFavorites = previousFavorites.concat([stopId]);
    const jsonCurrentFavorites = JSON.stringify(currentFavorites);
    await AsyncStorage.setItem("favorites", jsonCurrentFavorites);
  }
  changeLastUpdated(stopId + "add");
}

async function removeStop(stopId, changeLastUpdated) {
  const jsonPreviousFavorites = await AsyncStorage.getItem('favorites');
  if (jsonPreviousFavorites !== null) {
    const previousFavorites = JSON.parse(jsonPreviousFavorites);
    const currentFavorites = previousFavorites.filter((item) => {
      return item !== stopId;
    });
    const jsonCurrentFavorites = JSON.stringify(currentFavorites);
    await AsyncStorage.setItem("favorites", jsonCurrentFavorites);
  }
  changeLastUpdated(stopId + "remove");
}


export default function StopModal(props) {
  const [data, setData] = useState([]);

  const getStatus = () => {
    try {
      const northResponse = fetch("http://localhost:3000/getTrains/" + props.stopId + "N");
      const southResponse = fetch("http://localhost:3000/getTrains/" + props.stopId + "S");

      Promise.all([northResponse, southResponse]).then(([northData, southData]) => {
        Promise.all([northData.text(), southData.text()]).then((allData) => {
          setData(allData);
        })
      });

    } 
    catch(error){
      console.error(error);
    }
  }
  useEffect(getStatus, []);

  return(
  <Modal>
    <Text>{data}</Text>
    <Pressable onPress={() => props.changeModal(false)}>
      <Text>X</Text>
    </Pressable>

    {props.inFavorites ? 
    <Pressable onPress={() => removeStop(props.stopId, props.changeLastUpdated)}>
      <Text>Remove From Favorites</Text>
    </Pressable> :
    <Pressable onPress={() => saveStop(props.stopId, props.changeLastUpdated)}>
      <Text>Add to Favorites</Text>
    </Pressable>}
    
  </Modal>
  )}

const styles = StyleSheet.create({
  modal : {
    height: 69,
    width: 420
  }
})