import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function Cart() {
  const {top: paddingTop} = useSafeAreaInsets();

  return (
    <View style={{paddingTop, alignItems: 'center'}}>
      <Text>Cart Screen</Text>
    </View>
  );
}

export default Cart;
