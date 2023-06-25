import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { Alert } from "react-native";
import startingNodes from "../utils/starting-nodes";

export default function Home({ navigation }) {
  let [inputValue, setInputValue] = useState('');

  let searchBtnPress = () => {
    console.log("User inputted: " + inputValue);
    if(!startingNodes.includes(inputValue)){
      console.log("Input rejected: " + inputValue);
      Alert.alert("Invalid input", "Please input the id of a starting node. Refer to client/utils/starting-nodes for details");
    } else {
      navigation.navigate('List', {startNode: inputValue});
    }
  }

  return (
    <View style={homepagestyles.container}>
      <Text
        style = {homepagestyles.heading_text}
        >
        How Do I Get Out Of Town Hall Station?
      </Text>

      <TextInput 
        placeholder = "Where are you" 
        onChangeText={value => setInputValue(value)}
        style = {homepagestyles.textinput}
        defaultValue= {inputValue}
        >
      </TextInput>

      <Pressable
        onPress = {searchBtnPress}
        style = {homepagestyles.button}
        >
        <Text 
          style={homepagestyles.button_text}
          >
          Search
        </Text>
      </Pressable>
    </View>
  );
}

const homepagestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading_text: {
    fontSize: 26,
    textAlign: "center",
    width: 300,
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    height: 40,
    width: '70%',
    textAlignVertical: 'center',
    padding: 0,
    paddingLeft: 10,
    marginTop: 40,
    marginBottom: 10,
    fontSize: 18
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    height: 40,
    width: 100,
    marginTop: 20,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  button_text: {
    fontSize: 18,
  }
});
