import { View } from 'react-native';
import Home from './views/Home';
import Favorites from './views/Favorites';
import Search from './views/Search';
import { useState } from 'react';

async function getData() {
  try {
    const response = await fetch('http://localhost:3000', {
      request: "GET"
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.blob();
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
