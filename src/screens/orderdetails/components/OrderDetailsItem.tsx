import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {ProductFieldsFragment} from 'src/apollo/generated';
import Common from 'src/components/common';
import {colors, theme} from 'src/styles';

type Props = {
  product: ProductFieldsFragment;
  quantity: number;
};

function OrderDetailsItem(props: Props) {
  const {product, quantity} = props;
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
            {product.title}
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
            {quantity > 1
              ? `$${product.price} X ${quantity} = $${product.price * quantity}`
              : `$${product.price}`}
          </Common.Txt>
        </Common.Block>
        <Common.Block>
          <Common.Txt
            style={{color: colors.orange, fontSize: 20, fontWeight: '600'}}>
            {quantity}
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
