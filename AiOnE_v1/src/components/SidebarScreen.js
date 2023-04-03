import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';


import { ProfileIcon, ChangePwdIcon, ContactIcon, CloseIcon, ArrowRight } from 'svg';
import styles from '../styles/Sidebar.styles.js'
import { getAuth, signOut } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const auth = getAuth();

const SidebarScreen = ({ navigation }) => {

  const clearUserData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await clearUserData();
      signOut(auth)
        .then(() => {
          // Successfully signed out
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert(errorMessage);
        });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={'transparent'} />

      <View style={styles.topCrossContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <CloseIcon height={40} width={40} fill="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.subContainer}>

        <TouchableOpacity style={styles.tiles} activeOpacity={0.2}>
          <View style={styles.miniContainer}>
            <ProfileIcon height={30} width={30} fill="#ffffff" />
          </View>
          <Text style={styles.tilesText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tiles} activeOpacity={0.2}>
          <View style={styles.miniContainer}>
            <ChangePwdIcon height={30} width={30} fill="#ffffff" />
          </View>
          <Text style={styles.tilesText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tiles} activeOpacity={0.2}>
          <View style={styles.miniContainer}>
            <ContactIcon height={30} width={30} fill="#ffffff" />
          </View>
          <Text style={styles.tilesText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
        <ArrowRight height={24} width={24} />
      </TouchableOpacity>
    </View>
  );
};
export default SidebarScreen;
