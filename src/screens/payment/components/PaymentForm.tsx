import React from 'react';
import Common from 'src/components/common';
import Header from 'src/components/Header';
import {sizes} from 'src/styles';

function PaymentForm() {
  return (
    <>
      <Header title="Payment" />
      <Common.Block ph={sizes.padding}>
        <Common.Txt>Payment Form</Common.Txt>
      </Common.Block>
    </>
  );
}

export default PaymentForm;
