import React, {useState} from 'react';
import { FlatList, Text, View, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../styles/RecentFeeds.styles';
import { BackIcon } from 'svg';

const recentFeedsUrl = "https://raw.githubusercontent.com/Prabhash33/AiOnE_DB/main/feeds.json";

const img = (deptNo) => {
    switch (deptNo) {
        case "01":
            return require('../images/hive.jpg');

        case "02":
            return require('../images/events.jpg');

        case "03":
            return require('../images/seminar.jpg');
    }
};

const RecentFeedsPage = ({ navigation }) => {

    const [data, setData] = useState([]);
    fetch(recentFeedsUrl)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => Alert.alert(error));

    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor={'#E8E8E8'} />
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}>
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>Latest News</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList data={data} renderItem={(element) => {
                    return (
                        <TouchableOpacity activeOpacity={0.7}>
                            <View style={styles.FeedContainer}>
                                <View style={styles.ImageContainer}>
                                    <Image source={img(element.item.dept)}
                                        style={styles.ImageStyle}></Image>
                                </View>
                                <View style={styles.TextContainer}>
                                    <Text style={styles.titleText}>{element.item.title}</Text>
                                    <Text style={styles.descText}>{element.item.desc.split(".")[0]}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }} />
            </ScrollView>
        </View>

    );
};

export default RecentFeedsPage;