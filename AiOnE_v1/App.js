import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Animated, LogBox } from 'react-native';

// importing components and screens
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import SidebarScreen from './src/components/SidebarScreen';
import ScanQRScreen from './src/components/ScanQRScreen';
import HomeButtons from './src/components/HomeButtons';
import SplashScreen from './src/components/SplashScreen';
import ProfilePage from './src/components/ProfilePage';
import InfoScreen from './src/components/InfoScreen';
import FeedbackFormPage from './src/components/FeedbackFormPage';
import ChangePasswordScreen from './src/components/ChangePasswordScreen';
import ParkingPage from './src/components/ParkingScreen';
import RecentFeeds from './src/components/RecentFeeds';
import OtherServicesScreen from './src/components/OtherServicesScreen';
import FoodJointOptionsScreen from './src/components/FoodJointOptionsScreen';
import ForgotPasswordScreen from './src/components/ForgotPasswordScreen';
import StationaryOrderScreen from './src/components/StationaryOrderScreen';
import LibraryScreen from './src/components/LibraryScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  LogBox.ignoreAllLogs();

  const [isLoading, setIsLoading] = React.useState(true);
  const opacity = React.useRef(new Animated.Value(1)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setIsLoading(false));
    }, 4000); // delay for 2 seconds
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
        <Stack.Screen name="FeedbackForm" component = {FeedbackFormPage}/>
        <Stack.Screen name="ChangePassword" component = {ChangePasswordScreen}/>
        <Stack.Screen name = "Parking" component = {ParkingPage}/>
        <Stack.Screen name = "RecentFeeds" component = {RecentFeeds}/>
        <Stack.Screen name = "OtherServices" component = {OtherServicesScreen}/>
        <Stack.Screen name = "FoodJointOptions" component = {FoodJointOptionsScreen}/>
        <Stack.Screen name = "ForgotPassword" component = {ForgotPasswordScreen}/>
        <Stack.Screen name = "StationaryOrder" component = {StationaryOrderScreen}/>
        <Stack.Screen name = "Library" component = {LibraryScreen}/>
      </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default App;
