import { View } from 'react-native';
import Home from './views/Home';
import Favorites from './views/Favorites';
import Search from './views/Search';
import { useState } from 'react';
import axios from "axios";

export default function App() {

  const fetchApi = async () => {
    try {
      const res = await axios.get("http://192.168.1.155:3000/");
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }



  const [currentViewString, setCurrentView] = useState("home");
  let CurrentView;
  switch (currentViewString) {
    case "home":
      CurrentView = Home;
      break;
    case "favorites":
      CurrentView = Favorites;
      break;
    case "search":
      CurrentView = Search;
      break;
    default:
      break;
  }
  return (
    <View>
      <CurrentView setCurrentView={setCurrentView}/>
    </View>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
