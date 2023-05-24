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


const LibraryScreen = ({ navigation }) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/Prabhash33/AiOne_DB/main/library.json')
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
                <Text style={styles.textStyle}>Book Details</Text>
            </View>

            <ScrollView style={styles.ScrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingTextStyle}>Name & Author</Text>
                    <Text style={styles.headingTextStyle}>Units Available</Text>
                </View>
                <View>
                    {data.map(item => (
                        <View key={item.name} style={styles.parkingTileContainer}>
                            <View style={{justifyContent: 'flex-end'}}>
                            <Text style={styles.headingTextStyle}>{item.name}</Text>
                            <Text style={styles.authorTextStyle}>{item.author}</Text>
                            </View>
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
export default LibraryScreen;
