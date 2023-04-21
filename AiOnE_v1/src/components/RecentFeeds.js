import React from 'react';
import { FlatList, Text, View, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../styles/RecentFeeds.styles';
import { BackIcon } from 'svg';

// const recentFeedsUrl = "https://raw.githubusercontent.com/Prabhash33/AiOnE_DB/main/feeds.json";

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
    // const [data, setData] = useState([]);
    // fetch(recentFeedsUrl,)
    // .then((response) => response.json())
    // .then((json) => setData(json))
    // .catch((error) => Alert.alert(error));

    const data = [
        {
            "dept": "01",
            "title": "Hive Space",
            "desc": "Hive at SAP is a group of interested people working together to achieve a common goal"
        },
        {
            "dept": "03",
            "title": "Seminar 1",
            "desc": "Full day workshop on time management on April 14 at seminar hall"
        },
        {
            "dept": "02",
            "title": "Events",
            "desc": "Event organized to talk with the higher management about the scope of the organization"
        },
        {
            "dept": "01",
            "title": "IoT at HIVE",
            "desc": "Second event of hive a group of interested people to work on IoT devices and create an organised parking software"
        },
        {
            "dept": "02",
            "title": "Ted Talk",
            "desc": "Welcome Prabhash and Swaraj Co-Founders of AiOnE to talk on their journey"
        },
        {
            "dept": "03",
            "title": "Seminar 2",
            "desc": "How to work efficiently - get to know from experts"
        }
    ]

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
                    console.log(element);
                    return (
                        <TouchableOpacity>
                            <View style={styles.FeedContainer}>
                                <View style={styles.ImageContainer}>
                                    <Image source={img(element.item.dept)}
                                        style={{ height: 70, width: 70, borderRadius: 35 }}></Image>
                                </View>
                                <View>
                                    <Text style={styles.titleText}>{element.item.title}</Text>
                                    <View style={styles.descContainer}>
                                        <Text style={styles.descText}>{element.item.desc}</Text>
                                    </View>
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