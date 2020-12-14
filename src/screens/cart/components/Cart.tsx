import {ApolloError} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {ProductFieldsFragment} from 'src/apollo/generated';
import Common from 'src/components/common';
import Loading from 'src/components/loading';
import LoadingOrError from 'src/components/LoadingOrError';
import {sizes, theme} from 'src/styles';
import navigation from 'src/utils/navigation';
import storage, {CartItems} from 'src/utils/storage';
import CartItem from './CartItem';

type Props = {
  data: ProductFieldsFragment[];
  error: ApolloError | undefined;
  loading: boolean;
  refetch: () => void;
  handleRemove: (cart: CartItems) => void;
};
function Cart(props: Props) {
  const {data, error, loading} = props;
  const [cartItems, setCartItems] = useState(() => storage.getCartItems());

  useEffect(() => {
    storage.addCartListener(refreshComponenent);
    return () => {
      storage.removeCartListener(refreshComponenent);
    };
  }, []);
  if (error) {
    return <LoadingOrError />;
  }
  if (loading) {
    return <Loading />;
  }
  function refreshComponenent() {
    setCartItems(storage.getCartItems());
  }
  const total = Array.isArray(data)
    ? data.reduce((prev, curr) => prev + curr.price * cartItems[curr._id], 0)
    : 0;
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{paddingHorizontal: sizes.padding}}>
        <Common.Block alignItems="center" mt={50}>
          {data.map((item) => (
            <CartItem
              key={item._id}
              product={item}
              refetch={props.refetch}
              handleRemove={props.handleRemove}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </Common.Block>
        {data.length > 0 && (
          <>
            <Common.Block
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              mt={40}>
              <Common.Txt size={18} fontWeight="600" color={theme.darkLighter}>
                Total
              </Common.Txt>
              <Common.Txt fontWeight="bold" size={20} color={theme.primary}>
                ${total}
              </Common.Txt>
            </Common.Block>
            <Common.Button
              onPress={() => {
                const products = data.map((p) => ({
                  productId: p._id,
                  quantity: cartItems[p._id],
                }));
                navigation.navigate('PaymentForm', {products, total});
              }}
              mt={30}
              txtColor={theme.black}
              title="Checkout"
              fontWeight="600"
            />
          </>
        )}
        {data.length === 0 && (
          <Common.Txt textAlign="center">Your cart it empty</Common.Txt>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cart;
