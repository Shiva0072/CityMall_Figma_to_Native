import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Feed_actions({actions}) {
  const {likes, comments, shares, likeSelected, color} = actions;
  return (
    <View style={styles.container}>
      <View style={styles.ActionsWrapper}>
        <View style={styles.myAction}>
          <View styles={styles.actionIcon}>
            <Image
              source={
                likeSelected
                  ? require('../assets/images/likesSelected.png')
                  : require('../assets/images/likes.png')
              }
            />
            <Text style={{color: likeSelected ? color : '#0000008f'}}>
              {likes}
            </Text>
          </View>
          <Text style={styles.text}>लाइक्स </Text>
        </View>
        <View style={styles.myAction}>
          <View styles={styles.actionIcon}>
            <Image source={require('../assets/images/Comment.png')} />
            <Text style={{color: '#0000008f'}}>{comments}</Text>
          </View>
          <Text style={styles.text}>कमेंट्स </Text>
        </View>
        <View>
          <View styles={styles.actionIcon}>
            <Image source={require('../assets/images/Share.png')} />
            <Text style={{color: '#0000008f'}}>{shares}</Text>
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
    backgroundColor: 'white',
    height: 118,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#F4F4F4',
  },
  ActionsWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    height: 56,
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  actionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  sendBtn: {
    marginTop: 14,
    marginRight: 13,
  },
  CommentWrapper: {
    flexDirection: 'row',
    marginTop: 66,
    marginHorizontal: 16,
    borderColor: '#00000033',
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
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
