import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import stations from "../../assets/Stations.json";

export default function useFavorites() {
  const [displayStations, changeDisplayStations] = useState([]);
  const [lastUpdated, changeLastUpdated] = useState("");

  const getFavorites = async () => {
    const jsonValue = await AsyncStorage.getItem('favorites');
    const favoritesList = jsonValue != null ? JSON.parse(jsonValue) : [];
  
    const result = stations.filter( item => {
      return favoritesList.includes(item["GTFS Stop ID"]);
    })
    changeDisplayStations(result);
  }
  useEffect(getFavorites, [lastUpdated]);

  return [displayStations, changeLastUpdated];
}
