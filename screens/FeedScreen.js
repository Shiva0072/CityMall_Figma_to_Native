import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import Feed_Navbar from '../components/Feed_Navbar';
import Feed_PostFilter from '../components/Feed_PostFilter';
import Feed_NavBar_Bottom from '../components/Feed_NavBar_Bottom';
import Feed_content from '../components/Feed_content';
import FeedDataScreen from './FeedDataScreen';

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <Feed_Navbar />
      <Feed_PostFilter />

      <ScrollView style={styles.scrollView}>
        <FeedDataScreen />
      </ScrollView>
      {/* <FeedDataScreen /> */}

      <Feed_NavBar_Bottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 0,
  },
  scrollView: {
    // flex: 1,
    // height: '100%',
    marginTop: 105,
    // marginBottom: 50,
  },
});
