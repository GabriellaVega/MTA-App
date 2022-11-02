import { View } from 'react-native';
import Home from './Home';
import Favorites from './Favorites';
import Search from './Search';
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });