import React from 'react';
import Cart from './components/Orders';
import {useMyOrdersQuery} from 'src/apollo/generated';

function CartContainer() {
  const {data} = useMyOrdersQuery();
  return <Cart orders={data?.myOrders || []} />;
}

export default CartContainer;
