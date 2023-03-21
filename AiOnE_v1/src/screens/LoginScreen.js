import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = () => {
  return (
    //this is the main container of the login page
    <View style={styles.mainContainer}>
      <Image source={require('../images/logo.png')} style={styles.imageStyle} />

      <Text style={styles.mainHeader}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="email address"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          placeholder="password"
        />
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.9}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.inputContainer} activeOpacity={0.7}>
        <Text style={styles.forgotPassText}>Forgot Password</Text>
      </TouchableOpacity>

      <View
        style={[
          styles.inputContainer,
          {borderBottomColor: '#ffffff', borderBottomWidth: 2},
        ]}
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.9}>
        <Text style={styles.buttonText}>Login via SSO</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 80,
    backgroundColor: '#432344',
  },

  mainHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 32,
    color: '#ffffff',
    paddingTop: 40,
    paddingBottom: 20,
    alignSelf: 'center',
  },

  inputContainer: {
    alignItems: 'center',
    marginTop: 30,
  },

  miniInputContainer: {
    color:'#FFC03D',
    alignItems:'center'
  },

  label: {
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
  },

  inputStyle: {
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 12,
    width: 320,
    height: 50,
  },

  button: {
    marginTop: 30,
    backgroundColor: '#FFC03D',
    borderRadius: 12,
    height: 50,
    width: 320,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
  },

  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000000',
  },

  imageStyle: {
    width: 263,
    height: 141,
    alignSelf: 'center',
  },

  forgotPassText: {
    fontFamily: 'Poppins-Medium',
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#ffffff',
  },
});
export default LoginScreen;
