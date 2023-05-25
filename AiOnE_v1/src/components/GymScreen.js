import React, { useEffect, useState } from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { BackIcon } from 'svg';

import styles from '../styles/LibraryScreen.styles.js'


const GymScreen = ({ navigation }) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/Prabhash33/AiOne_DB/main/gym.json')
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.log(error))
    }, [])

    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor={'#E8E8E8'} />
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('OtherServices')}>
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>Equipment Details</Text>
            </View>

            <ScrollView style={styles.ScrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingTextStyle}>Equipment</Text>
                    <Text style={styles.headingTextStyle}>Units Available</Text>
                </View>
                <View>
                    {data.map(item => (
                        <View key={item.eid} style={styles.parkingTileContainer}>
                            <Text style={styles.headingTextStyle}>{item.ename}</Text>
                            <Text style={styles.headingTextStyle}>{item.count}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};
export default GymScreen;
