import React, { useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView
} from 'react-native';

import { SmallRightArrow } from '../svg/index';

import styles from '../styles/MainFeed.styles.js';


const recentFeedsUrl = "https://raw.githubusercontent.com/Prabhash33/AiOnE_DB/main/feeds.json";


const MainFeed = () => {

  const [data, setData] = useState([]);
  fetch(recentFeedsUrl)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.log(error));

  console.log(data);

  const dept01Data = data.filter(item => item.dept === "01");
  const dept02Data = data.filter(item => item.dept === "02");
  const dept03Data = data.filter(item => item.dept === "03");
  const dept04Data = data.filter(item => item.dept === "04");


  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.miniHeader} activeOpacity={0.7}>
          <Text style={styles.headerText}> HIVE SPACE </Text>
          <SmallRightArrow height={40} width={40} />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <ScrollView nestedScrollEnabled={true}>
            {dept01Data.map(item => (
              <View style={styles.miniTextView} key={item.title}>
                <Text style={styles.miniTextHeading}>{item.title}</Text>
                <Text style={styles.miniTextBody}>{item.desc}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.miniHeader} activeOpacity={0.7}>
          <Text style={styles.headerText}> EVENTS </Text>
          <SmallRightArrow height={40} width={40} />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <ScrollView nestedScrollEnabled={true}>
            {dept02Data.map(item => (
              <View style={styles.miniTextView} key={item.title}>
                <Text style={styles.miniTextHeading}>{item.title}</Text>
                <Text style={styles.miniTextBody}>{item.desc}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.miniHeader} activeOpacity={0.7}>
          <Text style={styles.headerText}> SEMINARS </Text>
          <SmallRightArrow height={40} width={40} />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <ScrollView nestedScrollEnabled={true}>
            {dept03Data.map(item => (
              <View style={styles.miniTextView} key={item.title}>
                <Text style={styles.miniTextHeading}>{item.title}</Text>
                <Text style={styles.miniTextBody}>{item.desc}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.miniHeader} activeOpacity={0.7}>
          <Text style={styles.headerText}> OTHERS </Text>
          <SmallRightArrow height={40} width={40} />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <ScrollView nestedScrollEnabled={true}>
            {dept04Data.map(item => (
              <View style={styles.miniTextView} key={item.title}>
                <Text style={styles.miniTextHeading}>{item.title}</Text>
                <Text style={styles.miniTextBody}>{item.desc}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default MainFeed;