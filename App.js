import { View } from 'react-native';
import Home from './views/Home';
import Favorites from './views/Favorites';
import Search from './views/search/Search';
import { useState } from 'react';

async function getData() {
  try {
    const response = await fetch('http://localhost:3000/getTrains/R01N', {
      request: "GET"
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    }).then((data) => {
      console.log(data);
    })
  } catch (error) {
    console.log(error);
  }
}

export default function App() {

  getData().then((response) => {
    console.log(response);
  });
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
