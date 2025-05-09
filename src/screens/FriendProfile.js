import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionic from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const FriendProfile = ({route, navigation}) => {
  const {name, profileImage, post, followers, following} = route.params;

  return (
    <SafeAreaView
      edges={['top']}
      style={{width: '100%', backgroundColor: 'white'}}>
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="arrow-back" style={{fontSize: 20, color: 'black'}} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '92%',
            }}>
            <Text style={{fontSize: 15, marginLeft: 10, fontWeight: 'bold'}}>
              {name}
            </Text>
            <Feather
              name="more-vertical"
              styles={{fontSize: 20, color: 'black'}}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FriendProfile;
