import React from 'react';
import {TouchableOpacity} from 'react-native';
import {OrderFieldsFragment} from 'src/apollo/generated';
import Common from 'src/components/common';
import {colors, theme} from 'src/styles';
import navigation from 'src/utils/navigation';
import {convertUnixToLocalDate} from 'src/utils/unixToDate';

type Props = {
  order: OrderFieldsFragment;
};

function OrderItem(props: Props) {
  const {order} = props;
  let name = '';
  const {productsOrdered: products} = order;

  products.forEach(({product}) => {
    if (name === '') {
      name = product.title;
    } else {
      name = name + ', ' + product.title;
    }
  });

  const total = products.reduce(
    (prev, {product: p, quantity: q}) => prev + p.price * q,
    0,
  );

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('OrderDetails', {order, total})}>
      <Common.Card mb={20}>
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
              {products.reduce((p, c) => p + c.quantity, 0)} items
            </Common.Txt>
            <Common.Block flexDirection="row" justifyContent="space-between">
              <Common.Txt
                numberOfLines={1}
                fontWeight="600"
                lineHeight={24}
                color={theme.primary}>
                ${total}
              </Common.Txt>
              <Common.Txt
                numberOfLines={1}
                fontWeight="600"
                lineHeight={24}
                color={theme.grey}>
                {convertUnixToLocalDate(Number(order.orderDate))}
              </Common.Txt>
            </Common.Block>
          </Common.Block>
        </Common.Block>
      </Common.Card>
    </TouchableOpacity>
  );
}

export default OrderItem;
