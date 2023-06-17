import React, { useState, useEffect } from 'react';
import {
    View,
    StatusBar,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    ToastAndroid,
    Platform,
    AlertIOS,
} from 'react-native';
import { BackIcon } from 'svg';

import styles from '../styles/FeedbackFormPage.style.js'
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';
import { getAuth } from "firebase/auth";

const auth = getAuth();

const profileUrl = "https://raw.githubusercontent.com/Prabhash33/AiOnE_DB/main/details_all.json";

const FeedbackFormPage = ({ navigation }) => {

    const [selectedLocation, setSelectedLocation] = useState();
    const [isFeedbackChecked, setIsFeedbackChecked] = useState(true);
    const [isAssistanceChecked, setIsAssistanceChecked] = useState(false);
    const [profileData, setProfileData] = useState(null);

    const handleFeedbackCheckbox = () => {
        setIsFeedbackChecked(true);
        setIsAssistanceChecked(false);
    };

    const handleAssistanceCheckbox = () => {
        setIsAssistanceChecked(true);
        setIsFeedbackChecked(false);
    };

    const handleSubmit = () => {
        if (Platform.OS === 'android') {
            ToastAndroid.show("Form Submitted Successfully", ToastAndroid.LONG);
        } else if (Platform.OS === 'ios') {
            AlertIOS.alert("Form Submitted Successfully");
        }
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        })
    };

    const handleBook = () => {
        if (Platform.OS === 'android') {
            ToastAndroid.show("Booked Successfully", ToastAndroid.LONG);
        } else if (Platform.OS === 'ios') {
            AlertIOS.alert("Booked Successfully");
        }
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        })
    }

    const user = auth.currentUser;
    const userId = user.email;

    const fetchData = async () => {
        try {
            const response = await fetch(profileUrl);
            const data = await response.json();
            for (let obj of data) {
                if (obj.id === userId.split('@')[0]) {
                    setProfileData(obj);
                    break;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (!profileData) {
        return null; // or you can return a loading indicator
    }

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

            <ScrollView style={styles.bodyContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.ProfileContainer}>
                    <View style={styles.topTileTextContainer}>
                        <Text style={styles.miniHeadingText}>Name</Text>
                        <Text style={styles.nameText}>{profileData.name}</Text>
                        <Text style={styles.miniHeadingText}>I-Number</Text>
                        <Text style={styles.miniValueText}>{profileData.id}</Text>
                        <Text style={styles.miniHeadingText}>Email</Text>
                        <Text style={styles.miniValueText}>{profileData.email}</Text>
                        <Text style={styles.miniHeadingText}>Contact No.</Text>
                        <Text style={styles.miniValueText}>{profileData.phone}</Text>
                    </View>
                </View>

                <View style={styles.FormContainer}>
                    <Text style={styles.pickerHeadingText}>Location:</Text>
                    <View style={styles.pickerStyle}>
                        <Picker
                            selectedValue={selectedLocation}
                            mode={'dropdown'}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLocation(itemValue)
                            }>
                            <Picker.Item label="Bengaluru" value="Bengaluru" color="#000000" />
                            <Picker.Item label="Pune" value="Pune" color="#000000" />
                            <Picker.Item label="Hyderabad" value="Hyderabad" color="#000000" />
                            <Picker.Item label="Gurgaon" value="Gurgaon" color="#000000" />
                        </Picker>
                    </View>
                    <Text style={styles.pickerHeadingText}>Choose your complaint type:</Text>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isFeedbackChecked} onValueChange={handleFeedbackCheckbox} />
                        <Text style={styles.pickerHeadingText}>Feedback</Text>
                        <CheckBox value={isAssistanceChecked} onValueChange={handleAssistanceCheckbox} />
                        <Text style={styles.pickerHeadingText}>Assistance</Text>
                    </View>
                </View>

                <View style={styles.DescriptionContainer}>
                    <Text style={styles.pickerHeadingText}>Brief Description:</Text>
                    <View style={styles.descriptionBox}>
                        <ScrollView>
                            <TextInput style={styles.feedbackDescStyle} multiline={true}>
                            </TextInput>
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.submitButton}>
                    <TouchableOpacity style={styles.button} onPress={handleBook}>
                        <Text style={styles.buttonText}>Book</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};
export default FeedbackFormPage;
