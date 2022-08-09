import React, { useState } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import Favorites from './favorites';
import Search from './search';

export default function Home(props) {
  return (<>
    <Text> Welcome to the MTA App ! </Text>
    <Button
      title="Favorites"
      onPress={() => props.setCurrentView(<Favorites/>)}
    />
    <Button
      title="Search"
      onPress={() => props.setCurrentView(<Search/>)}
    />
    </>
  );
}
