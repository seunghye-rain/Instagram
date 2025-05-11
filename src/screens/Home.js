import {
  Text,
  StatusBar,
  View,
  ScrollView,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../components/Stories';
import Posts from '../components/Posts';
import PushNotification from 'react-native-push-notification';

const Home = () => {
  useEffect(() => {
    createChannel();
    requestNotificationPermission();
  }, []);

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'insta-channel',
      channelName: 'Insta Channel',
    });
  };

  const requestNotificationPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          {
            title: '알림 권한 요청',
            message: '이 앱은 알림을 보내기 위해 권한이 필요합니다.',
            buttonPositive: '확인',
          },
        );
        console.log('알림 권한 상태:', granted);
      } catch (err) {
        console.warn(err);
      }
    }
  };

  return (
    <SafeAreaView style={{width: '100%', color: 'white'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <View>
          <Text style={{fontSize: 25, fontWeight: '500'}}>Instagram</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="plus-square-o"
            style={{fontSize: 24, paddingHorizontal: 15}}
          />
          <Feather name="navigation" style={{fontSize: 24}} />
        </View>
      </View>
      <ScrollView>
        <Stories />
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
