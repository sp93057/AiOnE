import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = () => {
  return (
    <View backgroundColor="#d8d8d8" height="100%">
      <View style={styles.topContainer}>
        {/* add all the icons and side nav icons here*/}
      </View>

      <StatusBar translucent backgroundColor={'transparent'} />

      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.button} activeOpacity={0.9}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.9}>
          <Text style={styles.buttonText}>Feeds</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View>
          {/*Inside each view, we need to add the sub squares
            and the icons on top of them, hence the nesting */}
          <TouchableOpacity style={styles.tiles} activeOpacity={0.9}>
            <View style={styles.miniContainer}></View>
            <Text style={styles.tilesText}>Navigation</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.tiles} activeOpacity={0.9}>
            <View style={styles.miniContainer}></View>
            <Text style={styles.tilesText}>Scan</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.tiles} activeOpacity={0.9}>
            <View style={styles.miniContainer}></View>
            <Text style={styles.tilesText}>Recent Feed</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.tiles} activeOpacity={0.9}>
            <View style={styles.miniContainer}></View>
            <Text style={styles.tilesText}>Food Joint</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.tiles} activeOpacity={0.9}>
            <View style={styles.miniContainer}></View>
            <Text style={styles.tilesText}>Parking</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.tiles} activeOpacity={0.9}>
            <View style={styles.miniContainer}></View>
            <Text style={styles.tilesText}>Others</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    height: '20%',
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 40,
    backgroundColor: '#432344',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },

  bottomContainer: {
    height: '5%',
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  miniContainer: {
    height: 70,
    width: 70,
    backgroundColor: '#FFC03D',
    borderRadius: 12,
    overflow: 'hidden',
  },

  button: {
    marginTop: 30,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    height: 50,
    width: 100,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft: 10,
  },

  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000000',
  },

  tiles: {
    marginTop: 30,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    height: 70,
    width: 340,
    alignSelf: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  tilesText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28,
    color: '#000000',
    marginLeft: 15,
    marginTop: 15,
  },
});
export default HomeScreen;
