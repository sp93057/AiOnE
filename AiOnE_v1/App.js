import React, {useEffect} from 'react';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import SidebarScreen from './src/components/SidebarScreen';
import ScanQRScreen from './src/components/ScanQRScreen';
import HomeButtons from './src/components/HomeButtons';
import SplashScreen from './src/components/SplashScreen';
import ProfilePage from './src/components/ProfilePage';
import InfoScreen from './src/components/InfoScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Animated } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const opacity = React.useRef(new Animated.Value(1)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setIsLoading(false));
    }, 2000); // delay for 2 seconds
  }, []);


  return (
    <NavigationContainer>
      {isLoading ? (
        <Animated.View style={{ flex: 1, opacity }}>
          <SplashScreen />
        </Animated.View>
      ) : (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sidebar" component={SidebarScreen}/>
        <Stack.Screen name="HomeButtons" component={HomeButtons}/>
        <Stack.Screen name="QRScanner" component={ScanQRScreen}/>
        <Stack.Screen name="ProfilePage" component = {ProfilePage}/>
        <Stack.Screen name="InfoPage" component = {InfoScreen}/>
      </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default App;
