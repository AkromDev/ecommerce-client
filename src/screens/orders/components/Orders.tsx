import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Common from 'src/components/common';
import {sizes} from 'src/styles';
import {Order} from '../OrdersContainer';
import OrderItem from './OrderItem';

type Props = {
  orders: Order[];
};
function Orders(props: Props) {
  const {orders} = props;
  return (
    <SafeAreaView>
      <ScrollView style={{paddingHorizontal: sizes.padding}}>
        <Common.Block alignItems="center" mt={50}>
          {orders.map((item) => (
            <OrderItem key={item.id} order={item} />
          ))}
        </Common.Block>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Orders;
