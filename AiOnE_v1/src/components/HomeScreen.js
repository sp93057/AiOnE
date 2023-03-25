import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
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

export default class HomeScreen extends Component {
  /* Outside render, we write the dynamic functionalities.
  Here for instance to change the color of top buttons when clicked */
  state = {
    backgroundColor: '#52CB5E',
    backgroundColor2: '#ffffff',
  };

  changeColorHome() {
    this.setState({
      backgroundColor: '#52CB5E',
      backgroundColor2: '#ffffff',
    });
  }

  changeColorFeeds() {
    this.setState({
      pressed: false,
      backgroundColor: '#ffffff',
      backgroundColor2: '#52CB5E',
    });
  }
  render() {
    return (
      <View backgroundColor="#e8e8e8" height="100%">
        <StatusBar translucent backgroundColor={'transparent'} />
        <View style={styles.topContainer}>
          <View style={styles.sidebarContainer}>
          <TouchableOpacity>
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
            style={[
              {backgroundColor: this.state.backgroundColor},
              styles.button,
            ]}
            activeOpacity={0.7}
            onPress={() => this.changeColorHome()}
          >
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              {backgroundColor: this.state.backgroundColor2},
              styles.button,
            ]}
            activeOpacity={0.7}
            onPress={() => this.changeColorFeeds()}
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

          <TouchableOpacity style={styles.tiles} activeOpacity={0.7}>
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
  }
}

const styles = StyleSheet.create({
  topContainer: {
    height: '20%',
    width:'100%',
    paddingHorizontal: 35,
    paddingTop: 80,
    paddingBottom: 40,
    backgroundColor: '#432344',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
    flexDirection: 'row'
  },

  sidebarContainer: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    /*backgroundColor: "#000000" --> flex logic 5+5 = 10, 
    so each flex takes 5/10 i.e half space in a row*/
  },

  iconContainer: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: "#000000"
  },

  miniIconStyle: {
    height: 30,
    width: 30,
    marginLeft: 20
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },

  bottomContainer: {
    height: '6%',
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
  },

  miniContainer: {
    height: 70,
    width: 70,
    backgroundColor: '#FFC03D',
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    marginTop: 30,
    borderRadius: 24,
    height: 50,
    width: 100,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
  },

  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000000',
  },

  imageStyle: {
    width: 89,
    height: 34,
    alignSelf: 'center',
    padding: 10,
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
