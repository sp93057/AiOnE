import React from 'react';
import { View, StatusBar, Image, TouchableOpacity, Text } from 'react-native';
import { BackIcon } from 'svg';

import styles from '../styles/InfoScreen.styles.js'

const InfoScreen = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}>
                    <BackIcon height={32} width={32} fill="#ffffff"/>
                </TouchableOpacity>
            </View>
            <View style={styles.midContainer}>
            <Image source={require('../images/logo.png')} style={styles.imageStyle} />
            <Text style={styles.versionText}>All in One Resource App</Text>
            </View>

            <View style={styles.bottomContainer}>
                <Text style={styles.versionText}>v 1.0.0</Text>
            </View>
        </View>
    );
};
export default InfoScreen;
