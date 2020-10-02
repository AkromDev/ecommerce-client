import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function Orders() {
  const {top: paddingTop} = useSafeAreaInsets();
  return (
    <View style={{paddingTop, alignItems: 'center'}}>
      <Text>Orders Screen</Text>
    </View>
  );
}

export default Orders;
