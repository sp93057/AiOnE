import React from 'react';
import {
    Text,
    View,
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
} from 'svg';

import styles from '../styles/Homescreen.styles.js';


const HomeButtons = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity style={styles.tiles} activeOpacity={0.7}>
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
        </View>
    );
};

export default HomeButtons;