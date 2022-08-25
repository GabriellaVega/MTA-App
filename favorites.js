import { StyleSheet, Button, Text, View } from 'react-native';

export default function Favorites(props) {
  return (<>
    <Button
      title="Home"
      onPress={() => props.setCurrentView("home")}
    />
    <Text> Here are your favorite transit lines: </Text>
    </>
  );
}
