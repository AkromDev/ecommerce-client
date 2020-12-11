import React from 'react';
import PaymentForm from './components/PaymentForm';

function PaymentFormContainer(props) {
  const {
    route: {params},
  } = props;

  const {products, total} = params;

  return <PaymentForm products={products} total={total} />;
}

export default PaymentFormContainer;
