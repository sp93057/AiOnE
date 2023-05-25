import React, { useEffect, useState } from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { BackIcon, SmallRightArrow } from 'svg';

import styles from '../styles/FoodMenuFragment.styles.js'
import { useRoute } from '@react-navigation/native'

const FoodMenuFragment = ({ navigation }) => {

    const [menu, setMenu] = useState(null);

    const route = useRoute();
    const { cafeName } = route.params;
    // console.log(cafeName);


    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/Prabhash33/AiOne_DB/main/foodJointData.json');
                const data = await response.json();
                const jointMenu = data[cafeName];
                // console.log(jointMenu);
                setMenu(jointMenu);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMenu();
    }, [cafeName]);

    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor={'#E8E8E8'} />
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('FoodJointOptions')}>
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>Menu</Text>
            </View>

            <ScrollView style={styles.ScrollContainer} showsVerticalScrollIndicator={false}>
                <View>
                    {menu !== null && Object.entries(menu).map(([category, items]) => (
                        <View key={category} style={styles.innerContainer}>
                            <TouchableOpacity style={styles.miniHeader} activeOpacity={0.7}>
                                <Text style={styles.headerText}>{category}</Text>
                                <SmallRightArrow height={40} width={40} />
                            </TouchableOpacity>
                            <View style={styles.contentContainer}>
                                <ScrollView nestedScrollEnabled={true}>
                                    {Object.entries(items).map(([item, price]) => (
                                        <View key={item} style={styles.row}>
                                            <Text style={styles.item}>{item}</Text>
                                            <Text style={styles.price}>₹{price}/-</Text>
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};
export default FoodMenuFragment;
