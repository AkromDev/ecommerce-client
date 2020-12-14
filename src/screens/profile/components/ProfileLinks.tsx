import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Button from 'src/components/common/Button';
import navigation from 'src/utils/navigation';
import storage from 'src/utils/storage';
import {useMeQuery} from 'src/apollo/generated';
import Common from 'src/components/common';
import {colors} from 'src/styles';
import Loading from 'src/components/loading';

function ProfileLinks() {
  const {data, loading} = useMeQuery({
    skip: !storage.token,
    onError: () => {
      storage.setToStorage('token', '').then(() => {
        navigation.navigate('Splash');
      });
    },
  });
  if (loading) {
    return <Loading text="Fetching profile" />;
  }
  return (
    <SafeAreaView>
      <View>
        {data?.me && (
          <Common.Block mh={20} mt={40} alignItems="center">
            <Common.Txt color={colors.blueSemantic} size={20}>
              {data.me.firstName} {data.me.lastName}
            </Common.Txt>
            <Common.Txt color={colors.darkLighter} size={16} mt={10}>
              {data.me.email}
            </Common.Txt>
          </Common.Block>
        )}
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
