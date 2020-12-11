import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Common from 'src/components/common';
import {colors, theme} from 'src/styles';
import Plus from 'assets/svgs/plus.svg';
import Minus from 'assets/svgs/minus.svg';
import Delete from 'assets/svgs/delete.svg';
import {ProductFieldsFragment} from 'src/apollo/generated';
import storage, {CartItems} from 'src/utils/storage';

type Props = {
  product: ProductFieldsFragment;
  refetch: () => void;
  handleRemove: (cart: CartItems) => void;
};
function CartItem(props: Props) {
  const {product} = props;
  const [cartItems, setCartItems] = useState(() => storage.getCartItems());

  useEffect(() => {
    storage.addCartListener(refreshComponenent);
    return () => {
      storage.removeCartListener(refreshComponenent);
    };
  }, []);

  function refreshComponenent() {
    setCartItems(storage.getCartItems());
  }

  const onIncrease = () => {
    const items = {...cartItems};
    items[product._id] += 1;
    storage.setCartItems(items, () => {
      setCartItems(items);
    });
  };
  const onDecrease = () => {
    if (cartItems[product._id] > 1) {
      const items = {...cartItems};
      items[product._id] -= 1;
      storage.setCartItems(items, () => {
        setCartItems(items);
      });
    }
  };
  const onRemove = (id: string) => {
    const items = {...cartItems};
    if (items[id]) {
      delete items[id];
      storage.setCartItems(items, () => {
        setCartItems(items);
        props.handleRemove(items);
      });
    }
  };
  return (
    <TouchableOpacity>
      <Common.Card mb={20}>
        <Common.Block flexDirection="row" alignItems="center">
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: product.imageUrl,
            }}
          />
          <Common.Block flexBasis="50%" mr={20}>
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
              ${product.price}
            </Common.Txt>
          </Common.Block>
          <Common.Block alignItems="center" flexBasis="15%">
            <TouchableOpacity onPress={onIncrease}>
              <Plus />
            </TouchableOpacity>
            <Common.Txt size={16} lineHeight={24} fontWeight="500">
              {cartItems[product._id]}
            </Common.Txt>
            <TouchableOpacity onPress={onDecrease}>
              <Minus />
            </TouchableOpacity>
          </Common.Block>
          <Common.Block>
            <TouchableOpacity onPress={() => onRemove(product._id.toString())}>
              <Delete />
            </TouchableOpacity>
          </Common.Block>
        </Common.Block>
      </Common.Card>
    </TouchableOpacity>
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
