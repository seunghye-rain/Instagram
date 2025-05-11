/**
 * @format
 */

import {AppRegistry, Platform, PermissionsAndroid} from 'react-native';
import PushNotification from 'react-native-push-notification';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

PushNotification.configure({
  onNotification: function (notification) {
    console.log('Notification', notification);
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});

async function requestNotificationPermission() {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      {
        title: '알림 권한 요청',
        message: '이 앱은 알림을 보내기 위해 권한이 필요합니다.',
        buttonPositive: '확인',
      },
    );
    console.log('알림 권한 상태:', granted);
  }
}
