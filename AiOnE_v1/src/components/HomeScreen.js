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
  NavigationIcon,
  ScanIcon,
  FeedIcon,
  FoodIcon,
  BusIcon,
  ParkingIcon,
  OthersIcon,
  SidebarIcon,
  InformationIcon,
  NotificationIcon,
  ProfileIcon,
} from 'svg';

import styles from '../styles/Homescreen.styles.js';

const HomeScreen = ({ navigation }) => {
  const [backgroundColor1, setbackgroundColor1] = useState('#52CB5E');
  const [backgroundColor2, setbackgroundColor2] = useState('#ffffff');

  const HomeButtonPress = () => {
    setbackgroundColor1('#52CB5E');
    setbackgroundColor2('#ffffff');
  };

  const FeedsButtonPress = () => {
    setbackgroundColor2('#52CB5E');
    setbackgroundColor1('#ffffff');
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
        <TouchableOpacity style={styles.tiles} activeOpacity={0.7}>
          <View style={styles.miniContainer}>
            <NavigationIcon height={50} width={50} />
          </View>
          <Text style={styles.tilesText}>Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tiles} activeOpacity={0.7}
          onPress={() => navigation.navigate('QRScanner')}>
          <View style={styles.miniContainer}>
            <ScanIcon height={50} width={50} />
          </View>
          <Text style={styles.tilesText}>Scan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tiles} activeOpacity={0.7}>
          <View style={styles.miniContainer}>
            <FeedIcon height={50} width={50} />
          </View>
          <Text style={styles.tilesText}>Recent Feed</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tiles} activeOpacity={0.7}>
          <View style={styles.miniContainer}>
            <FoodIcon height={50} width={50} />
          </View>
          <Text style={styles.tilesText}>Food Joint</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tiles} activeOpacity={0.7}>
          <View style={styles.miniContainer}>
            <BusIcon height={50} width={50} />
          </View>
          <Text style={styles.tilesText}>Bus Routes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tiles} activeOpacity={0.7}>
          <View style={styles.miniContainer}>
            <ParkingIcon height={50} width={50} />
          </View>
          <Text style={styles.tilesText}>Parking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tiles} activeOpacity={0.7}>
          <View style={styles.miniContainer}>
            <OthersIcon height={50} width={50} />
          </View>
          <Text style={styles.tilesText}>Others</Text>
        </TouchableOpacity>
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

