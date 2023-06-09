import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Linking
} from 'react-native';

import {
    NavigationIcon,
    ScanIcon,
    FeedIcon,
    FoodIcon,
    BusIcon,
    ParkingIcon,
    OthersIcon,
    StationaryLogo
} from 'svg';

import styles from '../styles/Homescreen.styles.js';


const HomeButtons = ({ navigation }) => {

    return (
        <View>
            <TouchableOpacity style={styles.tiles} activeOpacity={0.7}
                onPress={() => navigation.navigate('QRScanner')}>
                <View style={styles.miniContainer}>
                    <NavigationIcon height={50} width={50} />
                </View>
                <Text style={styles.tilesText}>Navigation</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tiles} activeOpacity={0.7}
                onPress={() => navigation.navigate('QRScanner')}>
                <View style={styles.miniContainer}>
                    <ScanIcon height={50} width={50} />
                </View>
                <Text style={styles.tilesText}>Scan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tiles} activeOpacity={0.7} onPress={() => navigation.navigate('RecentFeeds')}>
                <View style={styles.miniContainer}>
                    <FeedIcon height={50} width={50} />
                </View>
                <Text style={styles.tilesText}>Recent Feed</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tiles} activeOpacity={0.7} onPress={() => navigation.navigate('FoodJointOptions')}>
                <View style={styles.miniContainer}>
                    <FoodIcon height={50} width={50} />
                </View>
                <Text style={styles.tilesText}>Food Joint</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tiles} activeOpacity={0.7} onPress={() => navigation.navigate('StationaryOrder')}>
                <View style={styles.miniContainer}>
                    <StationaryLogo height={50} width={50} />
                </View>
                <Text style={styles.tilesText}>Office Supplies</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tiles} activeOpacity={0.7}onPress={() => navigation.navigate('QRScanner')}>
                <View style={styles.miniContainer}>
                    <BusIcon height={50} width={50} />
                </View>
                <Text style={styles.tilesText}>Bus Routes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tiles} activeOpacity={0.7} onPress={() => navigation.navigate('Parking')}>
                <View style={styles.miniContainer}>
                    <ParkingIcon height={50} width={50} />
                </View>
                <Text style={styles.tilesText}>Parking</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tiles} activeOpacity={0.7} onPress={() => navigation.navigate('OtherServices')}>
                <View style={styles.miniContainer}>
                    <OthersIcon height={50} width={50} />
                </View>
                <Text style={styles.tilesText}>Others</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeButtons;