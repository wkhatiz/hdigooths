# HDIGOOTHS
A React Native application aiming to take the below map of Town Hall Station and recreate it as a weighted graph. From  there, dijktsras algorithm can be used to find the shortest path from any node in the graph. This React Native appliation displays all the exit nodes in the graph and allows you to pick one to begin recieving directions on how to get to the chose exit from the users starting point. 

![alt text](https://github.com/wkhatiz/hdigooths/blob/main/assets/Town%20Hall%20Station%20Map.png?raw=true)

The above map was then converted in to the below weighted graph and represented in the project as a JavaScript object. 

![alt text](https://github.com/wkhatiz/hdigooths/blob/main/assets/Weighted%20Graph.png?raw=true)

## Setting Up Dev Environment

### Pre-requisites
- Node.js
Node.js can be installed [here](https://nodejs.org/en/download)

- Android Virtual Device
You need a device for to run the application on. This can be a physical Android device with USB debugging enabled or an Android virtual device running on your workstation. The easiest way to get an AVD installed is using the Virtual Device Manager bundled with Android Studio. Android Studio can be downloaded [here](https://developer.android.com/studio)

Simply open Android Studio, look for Virtual Device Manager in the menu bar and follow the prompt to get an AVD up and running. 

### Starting the Dev Server

Now that you're all set up, open a terminal, navigate to the project directory, install the dependancies using the command:
```
npm install
```
then start Metro Bundler by running the command:
```
npx expo start
```

Wait for Metro Bundler to finish starting up then you can use Shift + A to display active devices you can build to. Select your AVD and the application should be shown in your AVD.
