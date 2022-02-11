import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Feed_content({content, img}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
      {img ? (
        <Image source={img} resizeMode="stretch" style={styles.img} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
