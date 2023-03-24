import React from 'react';
import {View, StyleSheet, StatusBar, Image} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Image source={require('../images/logo.png')} style={styles.imageStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#432344',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },

  imageStyle: {
    width: 263,
    height: 141,
    alignSelf: 'center',
  },
});
export default SplashScreen;
