import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import Feed_actions from '../components/Feed_actions';
import Feed_CL_Info from '../components/Feed_CL_Info';
import Feed_content from '../components/Feed_content';
import FeedContentData from '../assets/data/FeedContentData';
import Feed_Separator from '../components/Feed_Separator';

export default function FeedDataScreen() {
  return (
    <>
      {FeedContentData.map(({id, user, content}) => {
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
            <Feed_content content={content.data} img={content.img} />
            <Feed_actions />

            <Feed_Separator />
          </View>
        );
      })}

      {/* <Feed_CL_Info
        style={styles.container}
        img={require('../assets/images/CL_dp_1.png')}
        text1="अमित कुमार | "
        text2="डायरेक्टर"
        loc="रेवाड़ी • १५ मिनट "
        color="#5A20CF"
        follow={require('../assets/images/follow.png')}
      />
      <Feed_content
        content="“हमेशा खुद में होंसला रखो” \n मैंने अपने आप में होंसला रखा और मेहनत के दम पर आज मैं अपने परिवार का कल बेहतर करने में समर्थ हूँ | "
        img={require('../assets/images/post_1.png')}
      />
      <Feed_actions />
      <Feed_Separator />
      <Feed_CL_Info
        style={styles.container}
        img={require('../assets/images/CL_dp_2.png')}
        text1="Muskan Garg | "
        text2="वहेल ++"
        loc="रेवाड़ी • 35 मिनट"
        color="#3DBE29"
        follow={require('../assets/images/following.png')}
      />
      <Feed_content
        content="“हमेशा खुद में होंसला रखो” \n मैंने अपने आप में होंसला रखा और मेहनत के दम पर आज मैं अपने परिवार का कल बेहतर करने में समर्थ हूँ | "
        img={require('../assets/images/post_1.png')}
      />

      <Feed_actions />
      <Feed_Separator /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
  },
});
