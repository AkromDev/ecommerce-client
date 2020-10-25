import React from 'react';
import Common from 'src/components/common';
import Header from 'src/components/Header';

function PaymentConfirm() {
  return (
    <Common.Block>
      <Header title="Payment Confirm" />
      <Common.Txt mb={50} textAlign="center">
        Thank you for shopping with Furniture!
      </Common.Txt>
      <Common.Txt textAlign="center">
        We will prepare your parcel properly and send it to you as soon as
        possible.
      </Common.Txt>
      <Common.Txt textAlign="center" mt={50}>
        It takes 1~2days after your order. In case of Jeju area, delivery takes
        1 more day.
      </Common.Txt>
      <Common.Txt textAlign="center" mt={50}>
        If you write the last 3 digits of your order number instead of your name
        when you make a bank transfer, the confirmation process can be more
        certain and faster. (ex: If your order number is 12345, then please
        write 345 while bank transfering).
      </Common.Txt>
      <Common.Txt textAlign="center" mt={50}>
        - Bank Info : Woori Bank,{' '}
      </Common.Txt>
      <Common.Txt textAlign="center">
        1002-123-45678, Account Holder :{' '}
      </Common.Txt>
      <Common.Txt textAlign="center" mt={50}>
        Furniture Co., Ltd.
      </Common.Txt>

      <Common.Button title="Continue" mt={50}></Common.Button>
    </Common.Block>
  );
}

export default PaymentConfirm;
