import { Button, Text } from 'react-native';

export default function Home(props) {
  return (<>
    <Text> Welcome to the MTA App ! </Text>
    <Button
      title="Favorites"
      onPress={() => props.setCurrentView("favorites")}
    />
    <Button
      title="Search"
      onPress={() => props.setCurrentView("search")}
    />
    </>
  );
}