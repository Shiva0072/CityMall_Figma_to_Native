import {View, StyleSheet} from 'react-native';
import React from 'react';

import Feed_Actions from '../components/Feed_Actions';
import Feed_CL_Info from '../components/Feed_CL_Info';
import Feed_Content from '../components/Feed_Content';
import FeedContentData from '../assets/data/FeedContentData';
import Feed_Separator from '../components/Feed_Separator';

export default function FeedDataScreen() {
  return (
    <>
      {FeedContentData.map(({id, user, content, actions}) => {
        return (
          <View key={id}>
            <Feed_CL_Info
              img={user.img}
              text1={user.text1}
              text2={user.text2}
              loc={user.loc}
              color={user.color}
              follow={user.follow}
            />
            <Feed_Content content={content.data} img={content.img} />
            <Feed_Actions actions={actions} />

            <Feed_Separator />
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
  },
});
