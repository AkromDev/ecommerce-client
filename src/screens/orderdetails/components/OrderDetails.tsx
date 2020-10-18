import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from 'src/components/Header';
import {sizes, theme} from 'src/styles';
import Common from 'src/components/common';
import {Order} from 'src/screens/orders/OrdersContainer';
import OrderDetailsItem from './OrderDetailsItem';

type Props = {
  route: {
    params: {
      order: Order;
    };
  };
};
function OrderDetails(props: Props) {
  const {
    route: {
      params: {order},
    },
  } = props;
  return (
    <ScrollView>
      <Header title="Order Details" />
      <View style={styles.container}>
        <Common.Block alignItems="center" mb={40}>
          {order.products.map((item) => (
            <OrderDetailsItem key={item.productName} product={item} />
          ))}
        </Common.Block>
        <Common.Block
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={12}>
          <Common.Txt size={16} fontWeight="500" color={theme.darkLighter}>
            Product price
          </Common.Txt>
          <Common.Txt fontWeight="600" size={14} color={theme.darkLighter}>
            ₩{order.total}
          </Common.Txt>
        </Common.Block>
        <Common.Block
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={12}>
          <Common.Txt size={16} fontWeight="500" color={theme.darkLighter}>
            Shipping price
          </Common.Txt>
          <Common.Txt fontWeight="600" size={14} color={theme.darkLighter}>
            ₩{order.shipmentFee}
          </Common.Txt>
        </Common.Block>
        <Common.Block
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={12}>
          <Common.Txt size={16} fontWeight="500" color={theme.dark}>
            Total
          </Common.Txt>
          <Common.Txt fontWeight="bold" size={22} color={theme.primary}>
            ₩{order.total + order.shipmentFee}
          </Common.Txt>
        </Common.Block>
      </View>
    </ScrollView>
  );
}

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizes.padding,
    paddingTop: 10,
  },
  formButton: {},
});
