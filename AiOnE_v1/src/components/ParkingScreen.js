import React, { useEffect, useState } from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { BackIcon } from 'svg';

import styles from '../styles/Parking.styles.js'


const ParkingPage = ({ navigation }) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/sp93057/AiOne_DB/main/parking.json')
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.log(error))
    }, [])

    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor={'#E8E8E8'} />
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}>
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>Parking</Text>
            </View>

            <ScrollView style={styles.ScrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingTextStyle}>Parking Space</Text>
                    <Text style={styles.headingTextStyle}>Availability</Text>
                </View>
                <View>
                    {data.map(item => (
                        <View key={item.location} style={styles.parkingTileContainer}>
                            <Text style={styles.headingTextStyle}>{item.location}</Text>
                            <Text style={[styles.headingTextStyle,
                            item.count === '0' && {color: '#DC424B'},
                            item.count <=20 && item.count > 0 && {color:'#D4C436'},
                            item.count >20 && {color: '#06CE3E'}
                            ]}>{item.count}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};
export default ParkingPage;
