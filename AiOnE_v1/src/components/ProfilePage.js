import React from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import { BackIcon } from 'svg';

import styles from '../styles/ProfilePage.styles'
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();


const ProfilePage = ({ navigation }) => {

    const logout = () => {
        signOut(auth)
            .then(() => {
                // Successfully signed out
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(errorMessage);
            });
    };


    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor={'#E8E8E8'} />
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}>
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>Profile</Text>
            </View>

            <ScrollView style={styles.ScrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.ProfileContainer}>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../images/pic.jpg')}
                            style={{ flex: 1, height: 180, width: 120, borderRadius: 12 }}></Image>
                    </View>
                    <View style={styles.topTileTextContainer}>
                        <Text style={styles.nameText}>David Wallace</Text>
                        <Text style={styles.miniHeadingText}>I-Number</Text>
                        <Text style={styles.miniValueText}>I123456</Text>
                        <Text style={styles.miniHeadingText}>Email</Text>
                        <Text style={styles.miniValueText}>david01@company.com</Text>
                        <Text style={styles.miniHeadingText}>Contact No.</Text>
                        <Text style={styles.miniValueText}>+91 9987643423</Text>
                    </View>
                </View>

                <View style={styles.AddressContainer}>
                    <Text style={styles.miniHeadingText}>Office Address:</Text>
                    <Text style={styles.miniValueText}>Whitefield, Bengaluru</Text>
                    <Text style={styles.miniHeadingText}>Reports To:</Text>
                    <Text style={styles.miniValueText}>Michael Scott</Text>
                    <Text style={styles.miniHeadingText}>Period of Service</Text>
                    <Text style={styles.miniValueText}>1 Year 7 Months</Text>
                </View>

                <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => navigation.navigate('ChangePassword')}>
                        <Text style={styles.buttonText}> Change Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                        <Text style={styles.buttonText}> Contact Us </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7} onPress={logout}>
                        <Text style={styles.buttonText}> Logout </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};
export default ProfilePage;
