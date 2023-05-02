import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Mail, Lock, ArrowRight } from 'svg';
import styles from '../styles/Loginscreen.styles.js';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from '../../firebaseConfig';

const auth = getAuth();


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  /* -------------Login procedure using Github API ------------------------ 
  const handleLogin = () => {
    fetch(
      'https://raw.githubusercontent.com/sp93057/AiOne_DB/main/login_creds.json',
    )
      .then(response => response.json())
      .then(data => {
        const user = data.users.find(
          u => u.username === username && u.password === password,
        );
        if (user) {
          // Authentication successful, navigate to the next screen
          navigation.replace('Home');
          setUsername('');
          setPassword('');
        } else {
          // Authentication failed, show an error message
          if (username === '' && password === '') {
            Alert.alert('Please enter Credentials!');
          } else {
            Alert.alert('Authentication FAILED!');
            setPassword('');
            setUsername('');
          }
        }
      })
      .catch(error => {
        // Handle fetch error
        Alert.alert('Error Unknown!');
      });
  }; 
  -------------------------------------------------------------------------
  */


  /*----------------Login using Firebase Authentication service---------------*/
  const handleLogin = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setUsername('');
        setPassword('');
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (username === '' && password === '') {
          Alert.alert("Enter credentials");
          setLoading(false);
        } else {
          Alert.alert(errorMessage);
          setPassword('');
          setUsername('');
          setLoading(false);
        }
      });
  }
  
  // Listen for changes in the authentication state
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      navigation.replace('Home');
    } else {
      // User is signed out
      navigation.navigate('Login');
    }
  });
  
  /* -------------------------------------------------------------------------- */

  return (
    /*this is the main container of the login page*/
    <ScrollView contentContainerStyle={styles.mainContainer} showsVerticalScrollIndicator={false}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Image source={require('../images/logo.png')} style={styles.imageStyle} />

      <Text style={styles.mainHeader}>Login</Text>

      <View>
        <TouchableOpacity style={styles.tiles} activeOpacity={0.9}>
          <View style={styles.miniContainer}>
            <Mail height={35} width={35} />
          </View>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Username"
            placeholderTextColor={'#aaaaaa'}
            value={username}
            onChangeText={setUsername}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.tiles} activeOpacity={0.9}>
          <View style={styles.miniContainer}>
            <Lock height={35} width={35} />
          </View>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={'#aaaaaa'}
            value={password}
            onChangeText={setPassword}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.9}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
        <ArrowRight height={24} width={24} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.inputContainer} activeOpacity={0.7}>
        <Text style={styles.forgotPassText}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} activeOpacity={0.9}>
        <Text style={styles.buttonText}>Login via SSO</Text>
        <ArrowRight height={24} width={24} />
      </TouchableOpacity>

      {loading && (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    )}

    </ScrollView>
  );
};

export default LoginScreen;
