import {View, Text} from 'react-native';
import React from 'react';
import PostItem from './PostItem';

const postInfo = [
  {
    postTitle: 'John',
    postPersonImage: require('../../assets/images/userProfile.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    likes: 765,
    isLiked: true,
  },
  {
    postTitle: 'Tony',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    likes: 345,
    isLiked: false,
  },
  {
    postTitle: 'Tom',
    postPersonImage: require('../../assets/images/profile4.jpeg'),
    postImage: require('../../assets/images/post3.jpeg'),
    likes: 734,
    isLiked: false,
  },
  {
    postTitle: 'John',
    postPersonImage: require('../../assets/images/profile3.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    likes: 875,
    isLiked: false,
  },
];

const Post = () => {
  return (
    <View>
      {postInfo.map((data, index) => {
        return <PostItem key={index} data={data} />;
      })}
    </View>
  );
};

export default Post;
