import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';


import { ProfileIcon, ChangePwdIcon, ContactIcon, ArrowRight } from 'svg';
import styles from '../styles/Sidebar.styles.js'
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const SidebarScreen = ({ navigation }) => {

  const logout = () => {
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
  };


  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={'transparent'} />

      <View style={styles.subContainer}>

        <TouchableOpacity style={styles.tiles} activeOpacity={0.2} onPress={() => navigation.navigate('ProfilePage')}>
          <View style={styles.miniContainer}>
            <ProfileIcon height={30} width={30} fill="#ffffff" />
            <Text style={styles.tilesText}>Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tiles} activeOpacity={0.2} onPress={() => navigation.navigate('ChangePassword')}>
          <View style={styles.miniContainer}>
            <ChangePwdIcon height={30} width={30} fill="#ffffff" />
          
          <Text style={styles.tilesText}>Change Password</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tiles} activeOpacity={0.2} onPress={() => navigation.navigate('ContactUs')}>
          <View style={styles.miniContainer}>
            <ContactIcon height={30} width={30} fill="#ffffff" />
          
          <Text style={styles.tilesText}>Contact Us</Text>
          </View>
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
