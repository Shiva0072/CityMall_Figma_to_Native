import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

// const img = require('../assets/images/post_1.png');
// const content =
//   '“हमेशा खुद में होंसला रखो” \n मैंने अपने आप में होंसला रखा और मेहनत के दम पर आज मैं अपने परिवार का कल बेहतर करने में समर्थ हूँ | ';

export default function Feed_content({content, img}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
      <Image source={img} resizeMode="stretch" style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    marginHorizontal: 0,
    backgroundColor: 'white',
    marginVertical: 0,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 22,
    color: '#000000db',
    marginHorizontal: 15,
    paddingVertical: 13,
  },
  img: {
    width: '100%',
  },
});
