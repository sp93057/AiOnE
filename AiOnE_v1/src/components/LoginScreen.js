import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Mail, Lock, ArrowRight} from 'svg';
import styles from '../styles/Loginscreen.styles.js';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  const submitData = () => {
    fetch('https://raw.githubusercontent.com/sp93057/AiOne_DB/main/login_creds.json')
      .then(response => response.json())
      .then(data => {
        const user = data.users.find(u => u.username === username && u.password === password);
        if (user) {
          // Authentication successful, navigate to the next screen
          navigation.navigate('Home');
        } else {
          // Authentication failed, show an error message
          if(username==="" && password==="")
          {
            Alert.alert("Please enter Credentials!")
          }
          else{
            Alert.alert("Authentication FAILED!");
          }
        }
      })
      .catch(error => {
        // Handle fetch error

      });
  };

  return (
    /*this is the main container of the login page*/
    <View style={styles.mainContainer}>
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
            value={password}
            onChangeText={setPassword}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.9}
        onPress={submitData}
      >
        <Text style={styles.buttonText}>Login</Text>
        <ArrowRight height={24} width={24} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.inputContainer} activeOpacity={0.7}>
        <Text style={styles.forgotPassText}>Forgot Password</Text>
      </TouchableOpacity>

      <View
        style={[
          styles.inputContainer,
          {borderBottomColor: '#ffffff', borderBottomWidth: 1},
        ]}
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.9}>
        <Text style={styles.buttonText}>Login via SSO</Text>
        <ArrowRight height={24} width={24} />
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
