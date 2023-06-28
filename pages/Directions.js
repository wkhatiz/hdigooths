import { StyleSheet, View, Text, Pressable, Image, Alert } from "react-native";
import { useState } from "react";
import { getDescFromNodes } from "../utils/connections";

export default function Directions({ route, navigation }) {

    let [counter, setCounter] = useState(0);
    let { nodesArr } = route.params;
    let directions = [];

    for(let x = 0; x < nodesArr.length-1; x++){
        directions.push(getDescFromNodes(nodesArr[x], nodesArr[x+1]));
    }

    directions.push("The exit should now be just ahead");

    let nextPressHandler = () => {
        if(counter+1 < directions.length){
            setCounter(counter + 1);
        } else {
            Alert.alert("You've Arrived", 'Your exit should be directly in front of you now. Have a good day');
        }
    }

    let prevPressHandler = () => {
        if(counter > 0) {
            setCounter(counter - 1);
        } else {
            Alert.alert("Limit Reached", "You cannot go back any further");
        }
    }

    return (
        <View style = {directionspagestyles.container}>
            <Image style = {directionspagestyles.image} source={require('../assets/sample_image.jpg')}></Image>
            <View style={directionspagestyles.directions_container}>
                <Text style={directionspagestyles.directions_text}>{directions[counter]}</Text>
                <View style={directionspagestyles.nav_container}>
                    <Pressable style={directionspagestyles.prev_button} onPress={prevPressHandler}><Text style={directionspagestyles.btnTxt}>Previous</Text></Pressable>
                    <Pressable style={directionspagestyles.next_button} onPress={nextPressHandler}><Text style={directionspagestyles.btnTxt}>Next</Text></Pressable>
                </View>
            </View>
        </View>
    );
}

const directionspagestyles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    image: {
        width: "80%",
        height: "70%",
    },
    directions_container: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "orange",
        width: "90%",
        padding: 10,
        marginBottom: 10,
        backgroundColor: "white"
    },
    directions_text: {
        fontSize: 18,
        paddingBottom: 20
    },
    nav_container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    next_button: {
        backgroundColor: 'rgb(230,120,21)',
        width: 110,
        height: 40,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    prev_button: {
        backgroundColor: 'rgb(230,120,21)',
        width: 110,
        height: 40,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    button_text: {
        color: 'rgb(255,255,255)',
        fontSize: 16
    }
})