import React, { useEffect, useState } from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    ScrollView,
    ToastAndroid,
    Platform,
    AlertIOS,
} from 'react-native';
import { BackIcon } from 'svg';

import styles from '../styles/StationaryOrderScreen.styles';

const StationaryOrderScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Prabhash33/AiOne_DB/main/Stationary.json')
            .then(response => response.json())
            .then(jsonData => {
                // Initialize quantity state for each item in the data array
                const updatedData = jsonData.map(item => ({ ...item, quantity: 0 }));
                setData(updatedData);
            })
            .catch(error => console.log(error));
    }, []);

    const decrementQuantity = index => {
        if (data[index].quantity > 0) {
            const updatedData = [...data];
            updatedData[index].quantity = updatedData[index].quantity - 1;
            setData(updatedData);
            calculateTotalAmount();
        }
    };

    const incrementQuantity = index => {
        const updatedData = [...data];
        updatedData[index].quantity = updatedData[index].quantity + 1;
        setData(updatedData);
        calculateTotalAmount();
    };

    const calculateTotalAmount = () => {
        let total = 0;
        data.forEach(item => {
            total += item.price * item.quantity;
        });
        setTotalAmount(total);
    };

    const handleSubmit = () => {
        if (Platform.OS === 'android') {
            ToastAndroid.show("Order Received Successfully!", ToastAndroid.LONG);
        } else if (Platform.OS === 'ios') {
            AlertIOS.alert("Order Received Successfully!");
        }
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        })
    };

    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor={'#E8E8E8'} />
            <View style={styles.topContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>Office Supplies</Text>
            </View>

            <ScrollView
                style={styles.ScrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.headingContainer}>
                    <Text style={styles.headingTextStyle}>Item</Text>
                    <Text style={styles.headingTextStyle}>Price</Text>
                    <Text style={styles.headingTextStyle}>Quantity</Text>
                </View>
                <View>
                    {data.map((item, index) => (
                        <View key={item.item} style={styles.parkingTileContainer}>
                            <Text style={styles.headingTextStyle}>{item.item}</Text>
                            <Text style={styles.headingTextStyle}>₹{item.price}/-</Text>
                            <View style={styles.container}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => decrementQuantity(index)}
                                >
                                    <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>{item.quantity}</Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => incrementQuantity(index)}
                                >
                                    <Text style={styles.buttonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.submitButtonView}>
                    <View style={styles.totalAmountContainer}>
                        <Text style={styles.totalAmountText}>Total Amount: ₹{totalAmount}</Text>
                    </View>
                    <TouchableOpacity style={styles.submitbutton} onPress={handleSubmit}>
                        <Text style={styles.submitbuttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default StationaryOrderScreen;
