import React from 'react';
import Common from 'src/components/common';
import {colors, theme} from 'src/styles';
import navigation from 'src/utils/navigation';
import {Order} from '../OrdersContainer';

type Props = {
  order: Order;
};

function OrderItem(props: Props) {
  const {order} = props;
  let name = '';
  order.products.forEach((item) => {
    if (name === '') {
      name = item.productName;
    } else {
      name = name + ', ' + item.productName;
    }
  });
  return (
    <Common.Card
      clickable={true}
      mb={20}
      onPress={() => navigation.navigate('OrderDetails', {order})}>
      <Common.Block flexDirection="row" alignItems="center">
        <Common.Block width="100%" mr={20}>
          <Common.Txt
            numberOfLines={1}
            fontWeight="600"
            size={16}
            lineHeight={24}>
            {name}
          </Common.Txt>
          <Common.Txt
            numberOfLines={1}
            fontWeight="500"
            size={14}
            lineHeight={24}
            color={colors.darkLighter}>
            {order.products.length} products
          </Common.Txt>
          <Common.Block flexDirection="row" justifyContent="space-between">
            <Common.Txt
              numberOfLines={1}
              fontWeight="600"
              lineHeight={24}
              color={theme.primary}>
              ₩{order.total}
            </Common.Txt>
            <Common.Txt
              numberOfLines={1}
              fontWeight="600"
              lineHeight={24}
              color={theme.grey}>
              {order.orderDate}
            </Common.Txt>
          </Common.Block>
        </Common.Block>
      </Common.Block>
    </Common.Card>
  );
}

export default OrderItem;
