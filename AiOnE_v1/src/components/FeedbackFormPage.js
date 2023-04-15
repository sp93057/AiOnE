import React, { useState } from 'react';
import {
    View,
    StatusBar,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
    TextInput,
} from 'react-native';
import { BackIcon } from 'svg';

import styles from '../styles/FeedbackFormPage.style.js'
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';

const FeedbackFormPage = ({ navigation }) => {

    const [selectedLocation, setSelectedLocation] = useState();
    const [isFeedbackChecked, setIsFeedbackChecked] = useState(true);
    const [isAssistanceChecked, setIsAssistanceChecked] = useState(false);
  
    const handleFeedbackCheckbox = () => {
      setIsFeedbackChecked(true);
      setIsAssistanceChecked(false);
    };
  
    const handleAssistanceCheckbox = () => {
      setIsAssistanceChecked(true);
      setIsFeedbackChecked(false);
    };

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

            <ScrollView style={styles.bodyContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.ProfileContainer}>
                    <View style={styles.topTileTextContainer}>
                        <Text style={styles.miniHeadingText}>Name</Text>
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
                    <Text style={styles.pickerHeadingText}>Location:</Text>
                    <View style={styles.pickerStyle}>
                        <Picker
                            selectedValue={selectedLocation}
                            mode={'dropdown'}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLocation(itemValue)
                            }>
                            <Picker.Item label="Bengaluru" value="Bengaluru" color="#000000" />
                            <Picker.Item label="Pune" value="Pune" color="#000000"/>
                            <Picker.Item label="Hyderabad" value="Hyderabad" color="#000000"/>
                            <Picker.Item label="Gurgaon" value="Gurgaon" color="#000000"/>
                        </Picker>
                    </View>
                    <Text style={styles.pickerHeadingText}>Choose your complaint type:</Text>
                    <View style={styles.checkboxContainer}>
                        <CheckBox value={isFeedbackChecked} onValueChange={handleFeedbackCheckbox}/>
                        <Text style={styles.pickerHeadingText}>Feedback</Text>
                        <CheckBox value={isAssistanceChecked} onValueChange={handleAssistanceCheckbox}/>
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
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};
export default FeedbackFormPage;
