import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './home';
import Favorites from './favorites';
import Search from './search';
import React, { useState } from 'react';

export default function App() {
  const [CurrentView, setCurrentView] = useState(props => <Home {...props}/>);
  console.log(CurrentView);
  return (<View><CurrentView setCurrentView={setCurrentView}/></View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
