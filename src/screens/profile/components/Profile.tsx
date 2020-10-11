import React from 'react';
import {Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Common from 'src/components/common';
import {sizes} from 'src/styles';
import navigation from 'src/utils/navigation';

function Profile() {
  const {top} = useSafeAreaInsets();
  return (
    <Common.Block pt={top + 20} alignItems="center" ph={sizes.padding}>
      <Text>Profile Screen</Text>
      <Common.Button
        mt={30}
        onPress={() => navigation.navigate('Signin')}
        title="Sign In"
        width="all"
      />
      <Common.Button
        mt={30}
        onPress={() => navigation.navigate('Signup')}
        title="Sign Up"
        width="all"
      />
    </Common.Block>
  );
}

export default Profile;
