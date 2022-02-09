import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';

import postFilterData from '../assets/data/postFilterData';

const renderItem = ({item, index, separators}) => {
  return (
    <View
      style={[
        styles.filter,
        {
          backgroundColor: item.selected
            ? 'rgba(288, 0, 70,0.1)'
            : 'rgba(0,0,0,0.07)',
          borderWidth: item.selected ? 1 : 0,
          borderColor: item.selected ? '#E40046' : 'white',
        },
      ]}>
      {item.icon ? <Image source={item.icon} style={styles.icon} /> : null}
      <Text
        style={[
          styles.text,
          {
            color: item.selected ? '#E40046' : '#000',
            opacity: item.selected ? 1 : 0.56,
            fontFamily: item.selected ? 'Poppins-Bold' : 'Poppins-Medium',
            fontSize: item.selected ? 15 : 14,
          },
        ]}>
        {item.text}
      </Text>
    </View>
  );
};

export default function Feed_PostFilter() {
  return (
    <View style={styles.filterWrapper}>
      <FlatList
        data={postFilterData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filterWrapper: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 69,
    marginTop: 0,
    backgroundColor: 'white',
    paddingBottom: 5,
  },
  filter: {
    height: 32,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginVertical: 5,
    marginHorizontal: 6,
    borderRadius: 20,
    borderStyle: 'solid',
  },
  icon: {
    height: 18,
    width: 14,
    padding: 1,
    marginHorizontal: 8,
  },
  text: {
    fontWeight: '500',
    textAlign: 'center',
  },
});
