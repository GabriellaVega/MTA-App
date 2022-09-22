import { Pressable, View, Text, StyleSheet } from "react-native";
import { useState } from "react";

export default function SwitchViewButton() {
    const [activeButton, setActiveButton] = useState("all");

    return(
    <View style={styles.button}>
        <Pressable 
            style={[styles.allButton, activeButton === "all" && styles.pressed]}
            onPress={() => setActiveButton("all")}>
            <Text>All</Text>
        </Pressable>
        <Pressable 
            style={[styles.trainsButton, activeButton === "trains" && styles.pressed]}
            onPress={() => setActiveButton("trains")}>
            <Text>Trains</Text>
        </Pressable>
        <Pressable 
            style={[styles.stationsButton, activeButton === "stations" && styles.pressed]}
            onPress={() => setActiveButton("stations")}>
            <Text>Stations</Text>
        </Pressable>
    </View>
    );
}


const styles = StyleSheet.create({
    allButton: {
        backgroundColor: "rgba(20, 160, 255, 0.8)",
        flex: 1,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        textAlign: "center",
        paddingTop: 8,
        paddingBottom: 8
    },
    trainsButton: {
        backgroundColor: "rgba(20, 160, 255, 0.8)",
        flex: 1,
        paddingTop: 8,
        paddingBottom: 8
    },
    stationsButton: {
        backgroundColor: "rgba(20, 160, 255, 0.8)",
        flex: 1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 8,
        paddingBottom: 8
        
    },
    button: {
        flexDirection: "row",
        justiftContent: "flex-end",
        flex: 1,
        height: 40
    },
    pressed: {
        backgroundColor: "rgba(100, 250, 130, 0.7)"
    }
})