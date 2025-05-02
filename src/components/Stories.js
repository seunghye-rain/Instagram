import {ScrollView, Text} from 'react-native';
import React from 'react';

const storyInfo = [
  {
    id: 1,
    name: '나의 스토리',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 2,
    name: 'john',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 3,
    name: 'tony',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 4,
    name: 'mark',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 5,
    name: 'daniel',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 6,
    name: 'jeno',
    image: require('../../assets/images/userProfile.jpeg'),
  },
];

const Stories = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      <Text>Stories</Text>
    </ScrollView>
  );
};

export default Stories;
