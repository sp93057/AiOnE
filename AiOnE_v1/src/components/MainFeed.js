import React, { useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { SmallRightArrow } from '../svg/index';

import styles from '../styles/MainFeed.styles.js'

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