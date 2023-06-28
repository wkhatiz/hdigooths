# HDIGOOTHS
A React Native application aiming to take the below map of Town Hall Station and recreate it as a weighted graph. From  there, dijkstra's algorithm can be used to find the shortest path from any node in the graph. This React Native application displays all the exit nodes in the graph and allows the user to pick one to begin recieving directions on how to get to the chosen exit from the users starting point. 

![alt text](https://github.com/wkhatiz/hdigooths/blob/main/assets/Town%20Hall%20Station%20Map.png?raw=true)

The above map was then converted into the below weighted graph and represented in the project as a JavaScript object. 

![alt text](https://github.com/wkhatiz/hdigooths/blob/main/assets/Weighted%20Graph.png?raw=true)

## Setting Up Dev Environment

### Pre-requisites
- Node.js

Node.js can be installed [here](https://nodejs.org/en/download)

- Android Virtual Device (AVD)

You need a device to run the application on. This can be a physical android device with 'USB Debugging' enabled in the settings or an AVD running on your workstation. The easiest way to get an AVD installed is using the Virtual Device Manager bundled with Android Studio. Android Studio can be downloaded [here](https://developer.android.com/studio)

Simply open Android Studio, look for Virtual Device Manager in the menu bar and follow the prompts to get an AVD up and running. 

*You can also install the Expo Go mobile app which enables you to remotely run the project on your personal device*

### Starting the Dev Server

Now that you're all set up, open a terminal, navigate to the project directory, install the dependancies using the command:
```
npm install
```
then start Metro Bundler by running the command:
```
npx expo start
```

If you're using the Expo Go app, scan the QR code that appears in the terminal as Metro Bundler starts up. 

Wait for Metro Bundler to finish starting up then you can use Shift + A to display active devices you can build to. Select your AVD and the application should be shown in your AVD.

## Current Status

The application itself is mostly completed and functional.

The main task to be completed is data entry. Providing an image and description text for every path between 2 nodes. This would be done in /utils/connections.js

## Future Improvements

- The application is entirely client-side. It would be best to implement a Postgres database with a Nodes table and a Paths table so that as more exits or paths are added to the application the data doesn't become unweildy. An Express.js API would provide the client with the relevant paths upon request. 
- The form on the splash page should contain a Picker rather than a textbox. The textbox was added for development as the native React Native Picker component was deprecated. 
- A Sort/Filter button would be nice on the List page. Currently, the list items are sorted from closest exit to furthest exit but having a button to change between certain criteria such as ruling out staircases, would provide better usability to impaired users. 
- Not using Location Data was a design choice as Town Hall Station is mostly underground which would pose issues in accuracy and not using Location Data means users don't have to provide sensitive information simply to interact with my novelty app. 
 



