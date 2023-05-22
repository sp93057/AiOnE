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
import styles from '../styles/ForgotPassword.styles.js'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth();

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = () => {
        setLoading(true);
        sendPasswordResetEmail(auth, email)
        .then(()=> {
            setLoading(false);
            if (Platform.OS === 'android') {
                ToastAndroid.show("Reset link sent to your email!", ToastAndroid.LONG);
            } else if (Platform.OS === 'ios') {
                AlertIOS.alert("Reset link sent to your email!");
            }
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              })
        }).catch((error) => {
            setLoading(false);
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            console.log(errorCode);
          });

    };

    return (
        <ScrollView contentContainerStyle={styles.mainContainer} showsVerticalScrollIndicator={false}>
            <StatusBar translucent />
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                   onPress={() => navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                  })}>
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>Reset Password</Text>
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
                        placeholder="Enter your e-mail"
                        value={email}
                        onChangeText={setEmail}
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

export default ForgotPasswordScreen;