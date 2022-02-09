import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import Feed_Navbar from '../components/Feed_Navbar';
import Feed_PostFilter from '../components/Feed_PostFilter';
import Feed_NavBar_Bottom from '../components/Feed_NavBar_Bottom';

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <Feed_Navbar />
      <Feed_PostFilter />

      <Feed_NavBar_Bottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
