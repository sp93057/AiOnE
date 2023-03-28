import React from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity
} from 'react-native';
import { BackIcon } from 'svg';
import { ScrollView } from 'react-native';


import styles from '../styles/ScanQRScreen.styles.js'
// import { RNCamera } from 'react-native-camera';


const ScanQRScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}>
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>QR Scanner</Text>
            </View>

            <View style={styles.middleContainer}>
                <View style={styles.cameraContainer}>
                    {/* <RNCamera
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.off}
                    /> */}
                </View>
            </View>


            <View style={styles.bottomContainer}>
                <Text style={styles.bottomBarTextStyle}>Recent Scans</Text>
                <ScrollView horizontal={true} style={styles.bottomScrollSection}></ScrollView>
            </View>
        </View>
    );
};
export default ScanQRScreen;
