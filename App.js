import { View } from 'react-native';
import Home from './views/Home';
import Favorites from './views/Favorites';
import Search from './views/search/Search';
import { useState } from 'react';


export default function App() {

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
