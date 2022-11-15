import { Text } from "react-native";

export default function Station(props) {
  return(
    <>
      {props.daytimeRoutes.split(" ").map(function callback(train) {
        return(<Text key={train}>{train}</Text>)
      })}
      <Text>{props.stopName}</Text>
    </>
  )
}