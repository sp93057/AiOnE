import React from 'react';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions= {{headerShown: false}}>
        <Stack.Screen
        name="Login"
        component = {LoginScreen}
        />
        <Stack.Screen
        name="Home"
        component = {HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
