import { Button, Text } from 'react-native';
import HomeButton from './HomeButton';

export default function Favorites(props) {
  return (<>
    <HomeButton setCurrentView={props.setCurrentView}/>
    <Text> Here are your favorite transit lines: </Text>
    </>
  );
}
