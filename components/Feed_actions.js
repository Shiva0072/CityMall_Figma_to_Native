import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

export default function Feed_actions({style}) {
  return (
    <View style={styles.container}>
      <View style={styles.ActionsWrapper}>
        <View style={styles.myAction}>
          <View styles={styles.actionIcon}>
            <Image source={require('../assets/images/likes.png')} />
            <Text style={styles.actionCount}>421</Text>
          </View>
          <Text style={styles.text}>लाइक्स </Text>
        </View>
        <View style={styles.myAction}>
          <View styles={styles.actionIcon}>
            <Image source={require('../assets/images/Comment.png')} />
            <Text style={styles.actionCount}>85</Text>
          </View>
          <Text style={styles.text}>कमेंट्स </Text>
        </View>
        <View style={styles.myAction}>
          <View styles={styles.actionIcon}>
            <Image source={require('../assets/images/Share.png')} />
            <Text style={styles.actionCount}>92</Text>
          </View>
          <Text style={styles.text}>शेयर करें </Text>
        </View>
      </View>
      <View style={styles.CommentWrapper}>
        <Image source={require('../assets/images/dp.png')} style={styles.dp} />
        <Text style={styles.searchText}>अपना कमेंट लिखें...</Text>
        <Image
          source={require('../assets/images/arrow.png')}
          style={styles.sendBtn}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: 'absolute',
    backgroundColor: 'white',
    height: 110,
    width: '100%',
    // marginBottom: 10,
    // paddingBottom: 0,
    // bottom: -80,
    // top: Dimensions.get('window').height - 150,
    // top: 150,
  },
  ActionsWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    height: 56,
    justifyContent: 'space-around',
    marginVertical: 5,
    // justifyContent: 'space-evenly',
    // alignContent: 'space-around',
  },
  actionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    // alignContent: 'center',
    // alignSelf: 'center',
  },
  actionCount: {
    color: '#0000008f',
  },
  sendBtn: {
    marginTop: 14,
    marginRight: 13,
  },
  myAction: {
    // backgroundColor: 'red',
  },
  CommentWrapper: {
    flexDirection: 'row',
    marginTop: 63,
    marginHorizontal: 16,
    // backgroundColor: 'red',
    borderColor: '#00000033',
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    // marginBottom:56
  },
  dp: {
    marginLeft: 12,
    marginVertical: 6,
  },
  searchText: {
    flex: 1,
    marginVertical: 12,
    marginLeft: 9,
    width: 92,
    height: 20,
    fontSize: 15,
    fontFamily: 'Mukta-Medium',
    lineHeight: 20,
    alignItems: 'center',
    color: '#0000008f',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    color: 'black',
    opacity: 0.56,
  },
});
