import { useState, useEffect } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import getAllPathsSorted from "../utils/calc-paths";
import { getExitNameFromPath } from "../utils/exit-nodes";
import graph from "../utils/graph";

export default function List({ route, navigation }) {
    let {startNode} = route.params;
    let [sortedPaths, setSortedPaths] = useState([{distance: 0, nodes: ["null"]}]);

    useEffect(() => {
        setSortedPaths(getAllPathsSorted(graph, startNode));
    }, [])

    let ListSubheading = (props) => {

        return(
            <View style = {listpagestyles.subheading_container}>
                <Text style={listpagestyles.subheading}>
                    {props.text}
                </Text>
            </View>
        );

    }

    function ListItem (props) {

        let pathPressHandler = () => {
            console.log("\nUser selected path.\nNodes:" + props.nodes.toString() + "\nName: " + props.name);
            navigation.navigate("Directions", {nodesArr: props.nodes});
        }

        return (
            <Pressable onPress={pathPressHandler}>
                <View style = {listpagestyles.path_container}>
                    <Text style={listpagestyles.path_name}>
                        {props.name}
                    </Text>
                    <Text style={listpagestyles.path_description}> 
                        {props.details}
                    </Text>
                </View>
            </Pressable>
        )
    }

    return (
        <ScrollView style = {listpagestyles.container}>
            <ListSubheading text = "The Closest Exit:"/>
            <ListItem 
                name={getExitNameFromPath(sortedPaths[0])} 
                nodes = {sortedPaths[0].nodes} 
                details={sortedPaths[0].distance + " metres. This is the shortest path."}
                />
            <ListSubheading text = "Other Exits:"/>

            {sortedPaths.map((path, i) => {
                return(
                    <ListItem 
                        key={i} 
                        name={getExitNameFromPath(path)} 
                        nodes = {path.nodes} 
                        details={path.distance + " metres from your starting point."}
                        />
                    )
                })
            }

        </ScrollView>
    );
}

const listpagestyles = {
    container: {
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    subheading_container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    subheading: {
        fontSize: 18,
        width: 200,
    },
    path_container: {
        width: '100%',
        height: 100,
        borderWidth: 2,
        borderColor: 'rgb(230,120,21)',
        borderRadius: 20,
        padding: 10,
        paddingVertical: 12,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginVertical: 7
    },
    path_name: {
        fontSize: 18,
    },
    path_description: {
        fontSize: 15,
        color: 'grey'
    }
}