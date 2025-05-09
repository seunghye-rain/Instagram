import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useNavigation} from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';

const Status = ({route, navigation}) => {
  const {name, image} = route.params;

  const statusBarHeight = getStatusBarHeight();

  const progress = useRef(new Animated.Value(0)).current;
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        height: '100%',
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          marginTop: Platform.OS === 'ios' ? statusBarHeight : 0,
          height: 3,
          width: '95%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
        }}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}
        />
      </View>
      <View
        style={{
          paddig: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 12,
          left: 0,
          width: '90%',
        }}>
        <View
          style={{
            borderRadius: 100,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={image}
            style={{
              borderRadius: 100,
              backgroundColor: 'orange',
              resizeMode: 'cover',
              width: '92%',
              height: '92%',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text style={{color: 'white', fontSize: 15, paddingLeft: 10}}>
            {name}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic
              name="close"
              style={{fontSize: 20, color: 'white', opacity: 0.6}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{position: 'absolute', width: '100%', height: 600}}
      />
      <View
        sylte={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          flexDirection: 'row',
          alignItmes: 'center',
          justifyContent: 'space-around',
          marginVertical: 10,
          width: '100%',
        }}></View>
    </SafeAreaView>
  );
};

export default Status;
