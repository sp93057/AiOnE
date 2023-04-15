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
} from "react-native";
import { BackIcon, Lock } from 'svg';
import styles from '../styles/ChangePasswordScreen.styles'
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const ChangePasswordScreen = ({ navigation }) => {
    const [currentPass, setCurrentPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmNewPass, setConfirmNewPass] = useState('');

    const onSubmit = () => {
        if (newPass === confirmNewPass) {
            // check for old password match and show the firebase alert
            // get the data needed like email to hit firebase
            // pass all the data with new pass

            // pop-up of password upadte and navigate to login page when pressed ok
            // Alert.alert("Password Updated!", "Please login again with new password.", [
            //     {
            //         text: "OK",
            //         onPress: () => {
            //             navigation.reset({
            //                 index: 0,
            //                 routes: [{ name: 'Login' }],
            //             });
            //         }
            //     }
            // ]);

            // OR
            signOut(auth)
                .then(() => {
                    // Successfully signed out
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
        }
        else {
            Alert.alert("Password Missmatch!!!", "Please re-enter the password");
            setNewPass('');
            setCurrentPass('');
            setConfirmNewPass('');
        }
    };

    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <StatusBar translucent backgroundColor={'#E8E8E8'} />
                <View style={styles.topContainer}>
                    <TouchableOpacity style={styles.backButton}
                        onPress={() => navigation.navigate('Home')}>
                        <BackIcon height={32} width={32} />
                    </TouchableOpacity>
                </View>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>Change Password</Text>
                </View>
                <View>
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
                </View>
                <View>
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
                </View>
                <View>
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
            </View>
        </ScrollView>
    );
}

export default ChangePasswordScreen;