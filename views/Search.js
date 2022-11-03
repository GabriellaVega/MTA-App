import { Button, Text, View, StyleSheet, TextInput } from "react-native";
import HomeButton from "./HomeButton";
import Container from "./Container";

export default function Search(props) {
  return (<>
    <HomeButton setCurrentView={props.setCurrentView}/>
    <Container title="Search"/>
  </>
  );
}
