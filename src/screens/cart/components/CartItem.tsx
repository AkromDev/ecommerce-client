import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Common from 'src/components/common';
import {colors, theme} from 'src/styles';
import Plus from 'assets/svgs/plus.svg';
import Minus from 'assets/svgs/minus.svg';
import {Product} from '../CartContainer';

type Props = {
  product: Product;
};

function CartItem(props: Props) {
  const {product} = props;
  return (
    <Common.Card clickable={true} mb={20}>
      <Common.Block flexDirection="row" alignItems="center">
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: product.imageUrl,
          }}
        />
        <Common.Block flexBasis="60%" mr={20}>
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
        <Common.Block alignItems="center">
          <TouchableOpacity>
            <Plus />
          </TouchableOpacity>
          <Common.Txt size={16} lineHeight={24} fontWeight="500">
            2
          </Common.Txt>
          <TouchableOpacity>
            <Minus />
          </TouchableOpacity>
        </Common.Block>
      </Common.Block>
    </Common.Card>
  );
}

export default CartItem;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    width: 80,
    height: 80,
    marginRight: 14,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 80 / 2,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    flexBasis: '20%',
    marginRight: 20,
  },
});
