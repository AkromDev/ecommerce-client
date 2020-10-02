import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function Profile() {
  const {top: paddingTop} = useSafeAreaInsets();
  return (
    <View style={{paddingTop, alignItems: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default Profile;
