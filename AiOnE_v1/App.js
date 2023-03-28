import React from 'react';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import SidebarScreen from './src/components/SidebarScreen';
import ScanQRScreen from './src/components/ScanQRScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sidebar" component={SidebarScreen}/>
        <Stack.Screen name="QRScanner" component={ScanQRScreen}/>
      </Stack.Navigator>
      {/* <ScanQRScreen/> */}
    </NavigationContainer>
  );
};

export default App;
