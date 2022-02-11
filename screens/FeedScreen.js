import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';

import Feed_Navbar_Top from '../components/Feed_Navbar_Top';
import Feed_PostFilter from '../components/Feed_PostFilter';
import Feed_NavBar_Bottom from '../components/Feed_NavBar_Bottom';
import Feed_Content from '../components/Feed_Content';
import FeedDataScreen from './FeedDataScreen';
import Feed_Groups from '../components/Feed_Groups';

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Feed_Navbar_Top />
        <Feed_PostFilter />
        <FeedDataScreen />
        <Feed_Groups />
        <Feed_NavBar_Bottom />
      </ScrollView>

      <Image
        source={require('../assets/images/WritePost.png')}
        style={styles.wrtiePost}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 0,
  },
  scrollView: {
    marginTop: 0,
  },
  wrtiePost: {
    position: 'absolute',
    top: 1960,
  },
});
