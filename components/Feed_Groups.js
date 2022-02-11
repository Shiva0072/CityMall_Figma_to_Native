import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

import FeedGroupsData from '../assets/data/FeedGroupsData';

export default function Feed_Groups() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>आपके लिए और सुझाव</Text>
      <View style={styles.groupWrapper}>
        {FeedGroupsData.map(data => {
          return (
            <View key={data.id} style={styles.group}>
              <Image style={styles.dp} source={data.img} />
              <View style={{alignItems: 'center'}}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={{color: data.titleColor, fontSize: 15}}>
                  {data.title}
                </Text>
                <Image source={data.info} style={{marginVertical: 5}} />
                <Image source={data.follow} />
              </View>
            </View>
          );
        })}
      </View>

      <View style={styles.seeAll}>
        <Text style={styles.seeAllText}> सभी देखें</Text>
        <Image source={require('../assets/images/next_arrow.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  dp: {
    top: -25,
  },
  group: {
    width: '38%',
    height: 172,
    marginVertical: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#00000033',
    borderRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#00000029',
    shadowOpacity: 0.8,
    shadowOffset: 4,
    alignItems: 'center',
  },
  groupWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 18,
  },
  name: {
    marginTop: -15,
    color: '#000000db',
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'normal',
    fontSize: 14,
  },
  seeAll: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeAllText: {
    color: '#E40046',
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'normal',
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 17,
    color: '#000000db',
    paddingVertical: 10,
    fontFamily: 'Poppins-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
