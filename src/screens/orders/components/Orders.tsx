import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {OrderFieldsFragment} from 'src/apollo/generated';
import Common from 'src/components/common';
import Loading from 'src/components/loading';
import {sizes} from 'src/styles';
import OrderItem from './OrderItem';

type Props = {
  orders: OrderFieldsFragment[];
  loading: boolean;
  error: any;
  refetch: () => void;
};
function Orders(props: Props) {
  const {orders, error, loading, refetch} = props;
  const ordersSorted = [...orders].sort(
    (a, b) => Number(b.orderDate) - Number(a.orderDate),
  );
  if (error) {
    return (
      <Common.Block>
        <Common.Txt>Something went wrong</Common.Txt>
      </Common.Block>
    );
  }
  if (loading && ordersSorted.length === 0) {
    return <Loading text="Fetching orders" />;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        refreshing={loading}
        onRefresh={refetch}
        contentContainerStyle={{paddingTop: 50}}
        style={{paddingHorizontal: sizes.padding}}
        data={ordersSorted}
        renderItem={(item) => <OrderItem order={item.item} />}
      />
    </SafeAreaView>
  );
}

export default Orders;
