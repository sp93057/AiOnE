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

import {useNavigation} from '@react-navigation/native';

import styles from '../styles/FoodJointOptionsScreen.styles.js'


const FoodJointOptionsScreen = () => {

    const navigation = useNavigation();

    const handleOptionsPress = (cafeName) => {
        navigation.navigate("FoodMenu", {cafeName})
    }

    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor={'#E8E8E8'} />
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}>
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>Food Joint</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bodyContainer}>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={() => handleOptionsPress('Metro_Joint')}>
                            <Image source={require('../images/restaurant.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Metro Joint</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={() => handleOptionsPress('Clubhouse')}>
                            <Image source={require('../images/spaghetti.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Clubhouse</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7}>
                            <Image source={require('../images/food_cart.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>South Story</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7}>
                            <Image source={require('../images/breakfast.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Khatta Meetha</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7}>
                            <Image source={require('../images/topping.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Flavours</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7}>
                            <Image source={require('../images/dosa.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Eurest</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7}>
                            <Image source={require('../images/vending-machine.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Vending Machine</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7}>
                            <Image source={require('../images/coffee.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Hatti Kaapi</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default FoodJointOptionsScreen;
