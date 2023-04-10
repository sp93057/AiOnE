import React from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity
} from 'react-native';
import { BackIcon } from 'svg';
import { ScrollView } from 'react-native';

import { CameraScreen} from 'react-native-camera-kit';

import styles from '../styles/ScanQRScreen.styles.js'


const ScanQRScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor={'#E8E8E8'} />
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}>
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>QR Scanner</Text>
            </View>

            <View style={styles.middleContainer}>
            <CameraScreen
                scanBarcode={true}
                onReadCode={(event) => Alert.alert('QR code found')}
                showFrame={true}
                laserColor='white'
                frameColor='#FFC03D' />
            </View>


            <View style={styles.bottomContainer}>
                <Text style={styles.bottomBarTextStyle}>Recent Scans</Text>
                <ScrollView horizontal={true} style={styles.bottomScrollSection}></ScrollView>
            </View>
        </View>
    );
};
export default ScanQRScreen;