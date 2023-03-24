import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = () => {
  return (
    /*this is the main container of the login page*/
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Image source={require('../images/logo.png')} style={styles.imageStyle} />

      <Text style={styles.mainHeader}>Login</Text>

      <View>
        <TouchableOpacity style={styles.tiles} activeOpacity={0.9}>
          <View style={styles.miniContainer}></View>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="email address"
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.tiles} activeOpacity={0.9}>
          <View style={styles.miniContainer}></View>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="password"
          />
        </TouchableOpacity>
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
    paddingBottom: 40,
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

  miniContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#FFC03D',
    borderRadius: 12,
    overflow: 'hidden',
  },

  inputStyle: {
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    fontFamily: 'Poppins-Medium',
    paddingVertical: 7,
    borderRadius: 12,
    width: 270,
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

  tiles: {
    width: 320,
    height: 50,
    marginTop: 30,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
export default LoginScreen;
