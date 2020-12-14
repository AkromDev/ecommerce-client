import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from 'src/components/Header';
import {sizes, theme} from 'src/styles';
import Common from 'src/components/common';
import OrderDetailsItem from './OrderDetailsItem';
import {OrderFieldsFragment} from 'src/apollo/generated';

type Props = {
  route: {
    params: {
      order: OrderFieldsFragment;
      total: number;
    };
  };
};
function OrderDetails(props: Props) {
  const {
    route: {
      params: {order, total},
    },
  } = props;
  return (
    <ScrollView>
      <Header title="Order Details" />
      <View style={styles.container}>
        <Common.Block alignItems="center" mb={40}>
          {order.productsOrdered.map(({product, quantity}) => (
            <OrderDetailsItem
              key={product._id}
              product={product}
              quantity={quantity}
            />
          ))}
        </Common.Block>
        <Common.Block
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={12}>
          <Common.Txt size={16} fontWeight="500" color={theme.darkLighter}>
            Products cost
          </Common.Txt>
          <Common.Txt fontWeight="600" size={14} color={theme.darkLighter}>
            ${total}
          </Common.Txt>
        </Common.Block>
        <Common.Block
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={12}>
          <Common.Txt size={16} fontWeight="500" color={theme.darkLighter}>
            Shipping cost
          </Common.Txt>
          <Common.Txt fontWeight="600" size={14} color={theme.darkLighter}>
            $4
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
            ${total + 4}
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
