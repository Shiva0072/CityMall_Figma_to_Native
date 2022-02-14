import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons.loadFont();

export default function Feed_Navbar() {
  return (
    <SafeAreaView style={styles.FeedWrapper}>
      <View style={styles.navContainer}>
        <View>
          <Image
            style={styles.sideMenu}
            source={require('../assets/images/sidemenu.png')}
          />
          <Text style={styles.feedTitle}>परिवार</Text>
        </View>
        <View>
          <View style={styles.notyfWrapper}>
            <MaterialCommunityIcons
              name="bell"
              style={styles.notyfBell}
              size={22}
            />
            <Text style={styles.notyfCount}>2</Text>
          </View>

          <Image
            source={require('../assets/images/dp.png')}
            style={styles.dp}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dp: {
    width: 32,
    height: 32,
    right: 25,
    top: -21,
  },
  FeedWrapper: {
    flex: 1,
    marginTop: 5,
    paddingTop: 0,
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
    color: '#000',
    opacity: 0.86,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 42,
    left: 0,
    backgroundColor: 'white',
  },
  notyfWrapper: {
    width: 24,
    height: 24,
    right: '250%',
    top: 8,
  },
  notyfBell: {
    color: 'black',
    top: 0.57,
  },
  notyfCount: {
    width: 14,
    height: 15,
    left: 10,
    top: -30,
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
    left: '70%',
    top: '12%',
  },
});
