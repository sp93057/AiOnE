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


const GamesScreen = ({ navigation }) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/Prabhash33/AiOne_DB/main/games.json')
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
                <Text style={styles.textStyle}>Details</Text>
            </View>

            <ScrollView style={styles.ScrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingTextStyle}>Game</Text>
                    <Text style={styles.headingTextStyle}>Building & Floor</Text>
                </View>
                <View>
                    {data.map(item => (
                        <View key={item.name} style={styles.parkingTileContainer}>
                            <Text style={styles.headingTextStyle}>{item.name}</Text>
                            <Text style={styles.headingTextStyle}>{item.loc}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};
export default GamesScreen;
