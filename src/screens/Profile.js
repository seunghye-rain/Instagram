import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import ProfileBody from '../components/ProfileBody';
import ProfileButton from '../components/ProfileButton';
import Entypo from 'react-native-vector-icons/Entypo';

const Profile = () => {
  let circles = [];
  let numberOfCircles = 10;

  for (let index = 0; index < numberOfCircles; index++) {
    circles.push(
      <View key={index}>
        {index === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="plus" style={{fontSize: 40, color: 'black'}} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }
  return (
    <SafeAreaView style={{backgroundColor: 'white', width: '100%'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name="양승혜"
          accountName="slo_lo.7l"
          profileImage={require('../../assets/images/userProfile.jpeg')}
          followers="360"
          following="350"
        />
        <ProfileButton
          id={0}
          name="양승혜"
          accountName="slo_lo.7l"
          profileImage={require('../../assets/images/userProfile.jpeg')}
        />
      </View>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{paddingVertical: 5, paddingHorizontal: 10}}>
          {circles}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
