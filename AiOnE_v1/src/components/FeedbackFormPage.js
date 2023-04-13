import React, { useState } from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    Alert,
    RadioButton,
    TextInput,
} from 'react-native';
import { BackIcon } from 'svg';

import styles from '../styles/FeedbackFormPage.style.js'
import CheckBox from '@react-native-community/checkbox';

const FeedbackFormPage = ({ navigation }) => {

    const handleSubmit = () => {
        Alert.alert(
            'Success',
            'Your submission was successful!',
            [
                {
                    text: 'OK',
                    onPress: () => navigation.navigate('Home'),
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor={'#E8E8E8'} />
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('QRScanner')}>
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.headingStyle}>Feedback Form</Text>
            </View>

            <View style={styles.ProfileContainer}>
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

            <View style={styles.FormContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="BLR01 F2 WR03"
                    placeholderTextColor="#999"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your feedback"
                    placeholderTextColor="#999"
                />

                <View style={styles.checkboxContainer}>
                    <Text>Feedback</Text>
                    <CheckBox
                        value={false}
                    />
                    
                    <Text>Assistance</Text>
                    <CheckBox
                        value={false}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};
export default FeedbackFormPage;
