import { Button, Text } from 'react-native';

export default function Search(props) {
  return (<>
    <Button
      title="Home"
      onPress={() => props.setCurrentView("home")}
    />
    <Text> Search for a transit line: </Text>
    </>
  );
}
