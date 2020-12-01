import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Button from 'src/components/common/Button';
import navigation from 'src/utils/navigation';
import storage from 'src/utils/storage';

function ProfileLinks() {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="Logout"
          mt={50}
          mh={20}
          onPress={() => {
            storage.setToStorage('token', '').then(() => {
              navigation.navigate('Splash');
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default ProfileLinks;
