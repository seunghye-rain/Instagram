import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import PushNotification from 'react-native-push-notification';
import Home from '../screens/Home';

const PostItem = ({data}) => {
  const [like, setLike] = useState(data.isLiked);

  const handleNotification = title => {
    PushNotification.getChannels(function (channel_ids) {
      console.log(channel_ids); //[channel_id__1]
    });

    PushNotification.cancelAllLocalNotifications(); // 알림 하나만 뜰 수 있도록 지우기

    PushNotification.localNotification({
      channelId: 'insta-channel',
      title: `${title}를 클릭했습니다.`,
      message: `메시지 입니다.`,
      color: 'red',
      bigText: 'My Big Text',
    });
  };

  return (
    <View
      style={{
        paddingBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.2,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => handleNotification(data.postTitle)}>
            <Image
              source={data.postPersonImage}
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
          <View style={{padding: 5}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              {data.postTitle}
            </Text>
          </View>
          <View style={{paddingLeft: 5}}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              {data.postTitle}
            </Text>
          </View>
        </View>
        <Feather name="more-vertical" style={{fontSize: 20}} />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={data.postImage} style={{width: '100%', height: 400}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 15,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => setLike(prev => !prev)}>
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              style={{
                paddingRight: 10,
                fontSize: 20,
                color: like ? 'red' : 'black',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionic
              name="chatbubble-outline"
              style={{fontSize: 20, paddingRight: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="navigation" style={{fontSize: 20}} />
          </TouchableOpacity>
        </View>
        <Feather name="bookmark" style={{fontSize: 20}} />
      </View>
      <View
        styles={{
          paddingHorizontal: 10,
        }}>
        <Text style={{paddingLeft: 5}}>
          좋아요 {like ? data.likes + 1 : data.likes} 개
        </Text>
        <Text
          style={{
            fontWeight: '700',
            fintSize: 14,
            paddingVertical: 2,
            paddingLeft: 5,
          }}>
          게시글 설명글입니다.
        </Text>
        <Text
          style={{
            opacity: 0.4,
            paddingVertical: 2,
            marginTop: 5,
            marginBottom: 5,
            paddingLeft: 5,
          }}>
          댓글 모두 보기
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={data.postPersonImage}
              style={{
                width: 25,
                height: 25,
                borderRadius: 100,
                backgroundColor: 'orange',
                marginRight: 10,
              }}
            />
            <TextInput placeholder="댓글 달기..." style={{opacity: 0.5}} />
          </View>
          <View styles={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#0095F6'}}>게시</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
