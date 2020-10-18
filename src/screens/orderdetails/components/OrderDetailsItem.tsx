import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Common from 'src/components/common';
import {Product} from 'src/screens/orders/OrdersContainer';
import {colors, theme} from 'src/styles';

type Props = {
  product: Product;
};

function OrderDetailsItem(props: Props) {
  const {product} = props;
  return (
    <Common.Card mb={20}>
      <Common.Block flexDirection="row" alignItems="center">
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: product.imageUrl,
          }}
        />
        <Common.Block flexBasis="70%" mr={20}>
          <Common.Txt
            numberOfLines={1}
            fontWeight="600"
            size={16}
            lineHeight={24}>
            {product.productName}
          </Common.Txt>
          <Common.Txt
            numberOfLines={1}
            fontWeight="500"
            size={14}
            lineHeight={24}
            color={colors.darkLighter}>
            {product.description}
          </Common.Txt>
          <Common.Txt
            numberOfLines={1}
            fontWeight="600"
            lineHeight={24}
            color={theme.primary}>
            ₩{product.price}
          </Common.Txt>
        </Common.Block>
      </Common.Block>
    </Common.Card>
  );
}

export default OrderDetailsItem;
const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    flexBasis: '20%',
    marginRight: 20,
  },
});
