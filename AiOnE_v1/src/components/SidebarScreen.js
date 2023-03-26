import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles/Sidebar.styles.js'

const SidebarScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={'transparent'} />

      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.tiles} activeOpacity={0.2}>
          <View style={styles.miniContainer}></View>
          <Text style={styles.tilesText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tiles} activeOpacity={0.2}>
          <View style={styles.miniContainer}></View>
          <Text style={styles.tilesText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tiles} activeOpacity={0.2}>
          <View style={styles.miniContainer}></View>
          <Text style={styles.tilesText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.9}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SidebarScreen;
