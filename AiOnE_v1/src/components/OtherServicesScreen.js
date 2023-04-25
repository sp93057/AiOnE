import React from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import { BackIcon } from 'svg';

import styles from '../styles/OtherServicesScreen.styles.js'


const OtherServicesScreen = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor={'#E8E8E8'} />
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}>
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>Other Services</Text>
            </View>

            <ScrollView>
                <View style={styles.bodyContainer}>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} onPress={() => console.log('Pressed item 1')}>
                            <Image source={require('../images/gym.png')} style={[styles.imageStyle, { transform: [{ rotate: '135deg' }] }]} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Gym</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} onPress={() => console.log('Pressed item 2')}>
                            <Image source={require('../images/library.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Library</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} onPress={() => console.log('Pressed item 3')}>
                            <Image source={require('../images/sports.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Games</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} onPress={() => console.log('Pressed item 4')}>
                            <Image source={require('../images/amenities.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Amenities</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default OtherServicesScreen;
