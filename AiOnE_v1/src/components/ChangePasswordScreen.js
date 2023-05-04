import { useState } from "react";
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Alert,
    ScrollView,
    ToastAndroid,
    Platform,
    AlertIOS,
    ActivityIndicator,
} from "react-native";
import { BackIcon, Lock } from 'svg';
import styles from '../styles/ChangePasswordScreen.styles'
import { EmailAuthProvider, getAuth, reauthenticateWithCredential, signOut, updatePassword } from "firebase/auth";

const auth = getAuth();

const ChangePasswordScreen = ({ navigation }) => {
    const [currentPass, setCurrentPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmNewPass, setConfirmNewPass] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = () => {

        setLoading(true);
        const user = auth.currentUser;

        const credential = EmailAuthProvider.credential(
            user.email,
            currentPass
        );

        reauthenticateWithCredential(
            user,
            credential
        ).then(() => {
            // Check if new password and confirm password match
            if (newPass !== confirmNewPass) {
                Alert.alert('Error', 'New password and confirm password do not match');
                setCurrentPass('');
                setNewPass('');
                setConfirmNewPass('');
                setLoading(false);
                return;
            }

            updatePassword(user, newPass).then(() => {
                signOut(auth)
                    .then(() => {
                        //Redirect to login page
                        setLoading(false);
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }],
                        });
                    })

                if (Platform.OS === 'android') {
                    ToastAndroid.show("Password Updated Sucessfully!", ToastAndroid.LONG);
                } else if (Platform.OS === 'ios') {
                    AlertIOS.alert("Password Updated Sucessfully!");
                }
            });
        })
    };

    return (
        <ScrollView contentContainerStyle={styles.mainContainer} showsVerticalScrollIndicator={false}>
            <StatusBar translucent backgroundColor={'#E8E8E8'} />
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}>
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>Change Password</Text>
            </View>
            <View style={styles.middleContainer}>

                <TouchableOpacity style={styles.tiles} activeOpacity={0.9}>
                    <View style={styles.miniContainer}>
                        <Lock height={35} width={35} />
                    </View>
                    <TextInput
                        style={styles.inputStyle}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        placeholder="Current Password"
                        value={currentPass}
                        onChangeText={setCurrentPass}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.tiles} activeOpacity={0.9}>
                    <View style={styles.miniContainer}>
                        <Lock height={35} width={35} />
                    </View>
                    <TextInput
                        style={styles.inputStyle}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        placeholder="New Password"
                        value={newPass}
                        onChangeText={setNewPass}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.tiles} activeOpacity={0.9}>
                    <View style={styles.miniContainer}>
                        <Lock height={35} width={35} />
                    </View>
                    <TextInput
                        style={styles.inputStyle}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        placeholder="Confirm New Password"
                        value={confirmNewPass}
                        onChangeText={setConfirmNewPass}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>

            {loading && (
                <View style={styles.spinnerContainer}>
                    <ActivityIndicator size="large" color="#ffffff" />
                </View>
            )}
        </ScrollView>
    );
}

export default ChangePasswordScreen;