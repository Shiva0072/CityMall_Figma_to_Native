import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';

// const img = require('../assets/images/CL_dp_1.png');
// const text1 = 'अमित कुमार | ';
// const text2 = 'डायरेक्टर';
// const loc = 'रेवाड़ी • १५ मिनट ';
// const color = '#5A20CF';
// const follow = require('../assets/images/follow.png');

export default function Feed_CL_Info({img, text1, text2, loc, color, follow}) {
  return (
    <View style={styles.container}>
      <Image source={img} style={{marginHorizontal: 14, marginVertical: 5}} />
      <View style={styles.Info}>
        <Text style={styles.title}>
          {text1}
          <Text style={{color: color}}>{text2}</Text>
        </Text>
        <Text style={styles.subTitle}>{loc}</Text>
      </View>
      <Image source={follow} style={{marginHorizontal: 14, marginTop: 12}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    marginHorizontal: 16,
    marginLeft: 0,
    height: 60,
  },
  Info: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#0000008f',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#000000db',
  },
});
