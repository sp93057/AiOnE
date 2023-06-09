import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  SidebarIcon,
  InformationIcon,
  NotificationIcon,
  ProfileIcon,
} from 'svg';

import styles from '../styles/Homescreen.styles.js';
import HomeButtons from './HomeButtons.js';
import MainFeed from './MainFeed.js';

import SideMenu from 'react-native-side-menu';
import SidebarScreen from './SidebarScreen';


const HomeScreen = ({ navigation }) => {

  const [activeButton, setActiveButton] = useState('home');
  const [isOpen, setIsOpen] = useState(false);


  const handleButtonPress = useCallback((buttonName) => {
    setActiveButton(buttonName);
  }, []);

  const renderComponent = () => {
    return activeButton === 'home' ? (
      <HomeButtons navigation={navigation} />
    ) : (
      <MainFeed />
    );
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <SideMenu menu={<SidebarScreen navigation={navigation} />} isOpen={isOpen} onChange={toggleSidebar}>
      <View style={styles.mainContainer}>
        <StatusBar translucent backgroundColor={'transparent'} />
        <View style={styles.topContainer}>
          <View style={styles.sidebarContainer}>
            <TouchableOpacity onPress={toggleSidebar}>
              <SidebarIcon height={30} width={30} fill="#ffffff" />
            </TouchableOpacity>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.miniIconStyle} onPress={() => navigation.navigate('InfoPage')}>
              <InformationIcon height={30} width={30} fill="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.miniIconStyle}>
              <NotificationIcon height={30} width={30} fill="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.miniIconStyle} onPress={() => navigation.navigate('ProfilePage')}>
              <ProfileIcon height={30} width={30} fill="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={[
              { backgroundColor: activeButton === 'home' ? '#52CB5E' : '#ffffff' },
              styles.button,
            ]}
            activeOpacity={0.7}
            onPress={() => handleButtonPress('home')}
          >
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              { backgroundColor: activeButton === 'feeds' ? '#52CB5E' : '#ffffff' },
              styles.button,
            ]}
            activeOpacity={0.7}
            onPress={() => handleButtonPress('feeds')}
          >
            <Text style={styles.buttonText}>Feeds</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {renderComponent()}
        </ScrollView>

        <View style={styles.bottomContainer}>
          <Image
            source={require('../images/bottomLogo.png')}
            style={styles.imageStyle}
          />
        </View>
      </View>
    </SideMenu>
  );
};
export default HomeScreen;
