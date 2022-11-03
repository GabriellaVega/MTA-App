import { Button, Text } from "react-native";
import HomeButton from "./HomeButton";
import Container from "./Container";

export default function Favorites(props) {
  return (<>
    <HomeButton setCurrentView={props.setCurrentView}/>
    <Container title="Favorites" />
    </>
  );
}
