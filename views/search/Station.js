import { Text, StyleSheet } from "react-native";

export default function Station(props) {
  return(
    <>
      {props.daytimeRoutes.split(" ").map(function callback(train) {
        return(
          <Text key={train} style={styles.line}>{train}</Text>
        )
      })}
      <Text>{props.stopName}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  line: {
    paddingLeft: 10,
    flexDirection:'row'
  }
})