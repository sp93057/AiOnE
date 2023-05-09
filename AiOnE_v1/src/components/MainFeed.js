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

const data = [
  {
    "dept": "01",
    "title": "Hive Space",
    "desc": "Hive at SAP is a group of interested people working together to achieve a common goal. This space is dedicated for all sorts of new innovation and on upcoming modern technologies"
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
];

const MainFeed = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.miniHeader} activeOpacity={0.7}>
          <Text style={styles.headerText}> HIVE SPACE </Text>
          <SmallRightArrow height={40} width={40} />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <FlatList data={data} renderItem={(element) => {
            return (
              <ScrollView>
                <View style={styles.FeedContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text>{element.item.title}: </Text>
                    <View>
                      <Text style={styles.descText}> {element.item.desc} </Text>
                    </View>
                  </View>
                  {/* <View style={{flexDirection: 'row'}}>
                    <Text style={styles.descText}>{element.item.desc.split(".")[0]}</Text>
                  </View> */}
                  <View
                    style={{
                      borderBottomColor: 'black',
                      borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                  />
                </View>
              </ScrollView>
            );
          }} />
        </View>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.miniHeader} activeOpacity={0.7}>
          <Text style={styles.headerText}> EVENTS </Text>
          <SmallRightArrow height={40} width={40} />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.miniHeader} activeOpacity={0.7}>
          <Text style={styles.headerText}> SEMINARS </Text>
          <SmallRightArrow height={40} width={40} />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.miniHeader} activeOpacity={0.7}>
          <Text style={styles.headerText}> OTHERS </Text>
          <SmallRightArrow height={40} width={40} />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
        </View>
      </View>
    </View>
  );
};

export default MainFeed;