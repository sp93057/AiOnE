import React, { useState } from 'react';
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


const HomeScreen = ({ navigation }) => {
  const [backgroundColor1, setbackgroundColor1] = useState('#52CB5E');
  const [backgroundColor2, setbackgroundColor2] = useState('#ffffff');
  const [activeButton, setActiveButton] = useState('home');

  const HomeButtonPress = () => {
    setbackgroundColor1('#52CB5E');
    setbackgroundColor2('#ffffff');
    setActiveButton('home');
  };

  const FeedsButtonPress = () => {
    setbackgroundColor2('#52CB5E');
    setbackgroundColor1('#ffffff');
    setActiveButton('feeds');
  };

  const renderComponent = () => {
    switch (activeButton) {
      case 'home':
        return <HomeButtons navigation={navigation}/>;
      case 'feeds':
        return <MainFeed/>;
      default:
        return null;
    }
  };

  return (
    <View backgroundColor="#e8e8e8" height="100%">
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.topContainer}>
        <View style={styles.sidebarContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Sidebar')}>
            <SidebarIcon height={30} width={30} fill="#ffffff" />
          </TouchableOpacity>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.miniIconStyle}>
            <InformationIcon height={30} width={30} fill="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniIconStyle}>
            <NotificationIcon height={30} width={30} fill="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniIconStyle}>
            <ProfileIcon height={30} width={30} fill="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={[{ backgroundColor: backgroundColor1 }, styles.button]}
          activeOpacity={0.7}
          onPress={HomeButtonPress}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            { backgroundColor: backgroundColor2 },
            styles.button,
          ]}
          activeOpacity={0.7}
          onPress={FeedsButtonPress}
        >
          <Text style={styles.buttonText}>Feeds</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {renderComponent()}
      </ScrollView>

      <View style={styles.bottomContainer}>
        <Image
          source={require('../images/bottomLogo.png')}
          style={styles.imageStyle}
        />
      </View>
    </View>
  );
};
export default HomeScreen;
