import React, { useState } from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    Linking
} from 'react-native';
import { BackIcon } from 'svg';
import { ScrollView } from 'react-native';

import { CameraScreen } from 'react-native-camera-kit';

import styles from '../styles/ScanQRScreen.styles.js';

const ScanQRScreen = ({ navigation }) => {

    const [isScanning, setIsScanning] = useState(true);
    const [isBookingVisible, setIsBookingVisible] = useState(false);

    const handleReadCode = (event) => {
        const qrData = event.nativeEvent.codeStringValue;
        if((qrData).startsWith("http")){
            Linking.openURL(qrData);
        }
        else if(/^[A-z]/i.test(qrData)){
//          WRBLR01F5L03
            if(qrData.startsWith("SR")){
                  setIsBookingVisible(true);
            }
            navigation.navigate('FeedbackForm');
            setIsBookingVisible(false);
        }
    };

    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor={'#E8E8E8'} />
            <SafeAreaView style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}>
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>QR Scanner</Text>
            </SafeAreaView>

            <View style={styles.middleContainer}>
                <CameraScreen
                    scanBarcode={isScanning}
                    onReadCode={handleReadCode}
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
