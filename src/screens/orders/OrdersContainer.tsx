import React from 'react';
import Orders from './components/Orders';
import {useMyOrdersQuery} from 'src/apollo/generated';

function CartContainer() {
  const {data, loading, error, refetch} = useMyOrdersQuery();
  return (
    <Orders
      orders={data?.myOrders || []}
      loading={loading}
      error={error}
      refetch={refetch}
    />
  );
}

export default CartContainer;
