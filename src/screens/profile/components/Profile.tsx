import React from 'react';
import {Text, ScrollView} from 'react-native';
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

      <Common.Input headerText="Name" placeholder="Hung Kieu" />
      <Common.Input headerText="Account Name" placeholder="Winterboiz" />
      <Common.Input headerText="Date" placeholder="18/08/1994" />
      <Common.Input headerText="Address" placeholder="Ha Dong, Ha Noi" />
      <Common.Input headerText="Phone Number" placeholder="+8822883344" />
      <Common.Input headerText="Email" placeholder="abcde@gmail.com" />
      <Common.Button title="Save" mt={30} width="all" />
    </Common.Block>
  );
}

export default Profile;
