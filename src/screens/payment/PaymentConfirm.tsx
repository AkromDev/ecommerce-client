import React from 'react';
import {Alert, ScrollView} from 'react-native';
import {useCreateOrderMutation} from 'src/apollo/generated';
import Common from 'src/components/common';
import Header from 'src/components/Header';
import {sizes} from 'src/styles';
import navigation from 'src/utils/navigation';
import storage from 'src/utils/storage';

function PaymentConfirm(props) {
  const {
    route: {params},
  } = props;
  const {receiver, products} = params;
  const [createOrder, {loading}] = useCreateOrderMutation({
    variables: {input: {products, receiver}},
    refetchQueries: ['myOrders'],
  });
  return (
    <ScrollView>
      <Header title="Payment Confirm" />
      <Common.Block ph={sizes.padding}>
        <Common.Txt mb={50} textAlign="center">
          Thank you for shopping with Furniture!
        </Common.Txt>
        <Common.Txt textAlign="center">
          We will prepare your parcel properly and send it to you as soon as
          possible.
        </Common.Txt>
        <Common.Txt textAlign="center" mt={50}>
          It takes 1~2days after your order. In case of Jeju area, delivery
          takes 1 more day.
        </Common.Txt>
        <Common.Txt textAlign="center" mt={50}>
          If you write the last 3 digits of your order number instead of your
          name when you make a bank transfer, the confirmation process can be
          more certain and faster. (ex: If your order number is 12345, then
          please write 345 while bank transfering).
        </Common.Txt>
        <Common.Txt textAlign="center" mt={50}>
          - Bank Info : Woori Bank,{' '}
        </Common.Txt>
        <Common.Txt textAlign="center">
          1002-123-0000, Account Holder :{' '}
        </Common.Txt>
        <Common.Txt textAlign="center" mt={50}>
          Furniture Co., Ltd.
        </Common.Txt>
        <Common.Button
          title="Complete"
          mt={50}
          loading={loading}
          onPress={() => {
            createOrder()
              .then(() =>
                Alert.alert('Order created', 'Order is created successfully', [
                  {
                    text: 'Confirm',
                    onPress: () => {
                      storage.setCartItems({}, () => {
                        storage.notifyCartListener();
                        return navigation.navigate('Orders');
                      });
                    },
                  },
                ]),
              )
              .catch(() => {
                Alert.alert('Order failed', 'Order creation has failed :(');
              });
          }}
        />
      </Common.Block>
    </ScrollView>
  );
}

export default PaymentConfirm;
