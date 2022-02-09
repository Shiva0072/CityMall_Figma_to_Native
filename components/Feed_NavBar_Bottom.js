import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Feed_NavBar_Bottom() {
  return (
    <View
      style={[
        styles.bottomNav,
        {boxShadow: '0px -2px 6px rgba(0, 0, 0, 0.06)'},
      ]}>
      <View style={styles.wrapper}>
        <Image
          source={require('../assets/images/Home.png')}
          style={styles.img}
        />
        <Text style={styles.text}>होम </Text>
      </View>
      <View style={styles.wrapper}>
        <Image
          source={require('../assets/images/Community_select.png')}
          style={styles.img}
        />
        <Text style={[styles.text, {color: 'black', fontWeight: '600'}]}>
          परिवार
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Image
          source={require('../assets/images/Orders.png')}
          style={styles.img}
        />
        <Text style={styles.text}>ऑर्डर्स </Text>
      </View>
      <View style={styles.wrapper}>
        <Image
          source={require('../assets/images/Group_2950.png')}
          style={styles.img}
        />
        <Text style={styles.text}>कस्टमर्स </Text>
      </View>
      <View style={styles.wrapper}>
        <Image
          source={require('../assets/images/Gullak.png')}
          style={styles.img}
        />
        <Text style={styles.text}>गुल्लक </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -1,
    width: '100%',
    height: 56,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  wrapper: {
    padding: 10,
  },
  img: {
    alignSelf: 'center',
    marginBottom: 2,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    color: '#616161',
  },
});
