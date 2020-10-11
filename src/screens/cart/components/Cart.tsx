import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Common from 'src/components/common';
import {sizes, theme} from 'src/styles';
import {Product} from '../CartContainer';
import CartItem from './CartItem';

type Props = {
  data: Product[];
};
function Cart(props: Props) {
  const {data} = props;
  console.log('data', props.data);
  return (
    <SafeAreaView>
      <ScrollView style={{paddingHorizontal: sizes.padding}}>
        <Common.Block alignItems="center" mt={50}>
          {data.map((item) => (
            <CartItem key={item.productName} product={item} />
          ))}
        </Common.Block>
        <Common.Block
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={40}>
          <Common.Txt size={18} fontWeight="600" color={theme.darkLighter}>
            Total
          </Common.Txt>
          <Common.Txt fontWeight="bold" size={20} color={theme.primary}>
            ₩637000
          </Common.Txt>
        </Common.Block>
        <Common.Button
          mt={30}
          txtColor={theme.black}
          title="Payment"
          fontWeight="600"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Cart;
