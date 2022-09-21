import { Pressable, View, Text, StyleSheet } from "react-native";
import { useState } from "react";

export default function SwitchViewButton() {
    const [allButtonClicked, setAllButton] = useState(true);
    const [trainsButtonClicked, setTrainsButton] = useState(false);
    const [stationsButtonClicked, setStationsButton] = useState(false);

    function handleAllButtonClick() {
        setAllButton(true);
        setTrainsButton(false);
        setStationsButton(false);
    }
    function handleTrainsButtonClick() {
        setAllButton(false);
        setTrainsButton(true);
        setStationsButton(false);
        
    }
    function handleStationsButtonClick() {
        setAllButton(false);
        setTrainsButton(false);
        setStationsButton(true);
    }


    return(
    <View style={styles.button}>
        <Pressable 
            style={allButtonClicked ? styles.allButtonPressed : styles.allButton} 
            onPress={handleAllButtonClick}>
            <Text>All</Text>
        </Pressable>
        <Pressable 
            style={trainsButtonClicked ? styles.trainsButtonPressed : styles.trainsButton} 
            onPress={handleTrainsButtonClick}>
            <Text>Trains</Text>
        </Pressable>
        <Pressable 
            style={stationsButtonClicked ? styles.stationsButtonPressed : styles.stationsButton} 
            onPress={handleStationsButtonClick}>
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
    allButtonPressed: {
        backgroundColor: "rgba(100, 250, 130, 0.7)",
        flex: 1,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        textAlign: "center",
        paddingTop: 8,
        paddingBottom: 8
    },
    trainsButtonPressed: {
        backgroundColor: "rgba(100, 250, 130, 0.7)",
        flex: 1,
        paddingTop: 8,
        paddingBottom: 8
    },
    stationsButtonPressed: {
        backgroundColor: "rgba(100, 250, 130, 0.7)",
        flex: 1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 8,
        paddingBottom: 8
    }
})