import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons.loadFont();
export default function Feed_Navbar() {
  return (
    <SafeAreaView style={styles.FeedWrapper}>
      <View style={styles.navContainer}>
        <Image
          style={styles.sideMenu}
          source={require('../assets/images/sidemenu.png')}
        />
        <Text style={styles.feedTitle}>परिवार</Text>

        <View style={styles.notyfWrapper}>
          <MaterialCommunityIcons
            name="bell"
            style={styles.notyfBell}
            size={22}
          />
          <Text style={styles.notyfCount}>2</Text>
        </View>

        <Image source={require('../assets/images/dp.png')} style={styles.dp} />
      </View>
      <View style={styles.line} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dp: {
    position: 'absolute',
    width: 32,
    height: 32,
    left: 350,
    top: 5,
  },
  FeedWrapper: {
    flex: 1,
  },
  feedTitle: {
    position: 'absolute',
    width: 55,
    height: 27,
    left: 62,
    top: 8,
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    /* identical to box height, or 150% */
    color: '#000', //'rgba(0, 0, 0, 0.86)',
    opacity: 0.86,
  },
  line: {
    position: 'absolute',
    width: '100%',
    height: 1,
    left: 0,
    top: 65,
    backgroundColor: '#F4F4F4',
  },
  navContainer: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    height: 56,
    left: 0,
    top: 24,
    backgroundColor: 'white',
  },
  notyfWrapper: {
    position: 'absolute',
    width: 24,
    height: 24,
    left: 300,
    top: 8,
  },
  notyfBell: {
    color: 'black',
    position: 'absolute',
    left: 2.57,
    top: 0.57,
  },
  notyfCount: {
    position: 'absolute',
    width: 14,
    height: 15,
    left: '58.33%',
    right: '16.67%',
    top: -5,
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 13,
    textAlign: 'center',
    color: '#FFFFFF',
    borderColor: '#E40046',
    borderWidth: 10,
    borderRadius: 13,
  },
  sideMenu: {
    position: 'absolute',
    left: '4.44%',
    right: '88.89%',
    top: '10%',
    bottom: '96.99%',
  },
});
