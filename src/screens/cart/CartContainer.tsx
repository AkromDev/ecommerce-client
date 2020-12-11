import React, {useEffect, useState} from 'react';
import {ProductFieldsFragment, useProductsQuery} from 'src/apollo/generated';
import storage, {CartItems} from 'src/utils/storage';
import Cart from './components/Cart';

function CartContainer() {
  const [products, setProducts] = useState<ProductFieldsFragment[]>([]);
  const {data, error, loading, refetch} = useProductsQuery({
    fetchPolicy: 'network-only',
  });

  const getCartProducts = (items: ProductFieldsFragment[] | undefined) => {
    const cartItems = storage.getCartItems();

    if (Array.isArray(items)) {
      console.log('cartItems', cartItems);
      return items.filter((p) => cartItems[p._id] > 0);
    }
    return [];
  };

  useEffect(() => {
    storage.addCartListener(refreshComponenent);
    return () => {
      storage.removeCartListener(refreshComponenent);
    };
  }, []);

  useEffect(() => {
    setProducts(getCartProducts(data?.products));
  }, [data]);

  function refreshComponenent() {
    refetch().then((res) => {
      setProducts(getCartProducts(res.data.products));
    });
  }
  const handleRemove = (cart: CartItems) => {
    setProducts((ps) => ps.filter((p) => cart[p._id] > 0));
  };
  return (
    <Cart
      data={products || []}
      error={error}
      loading={loading}
      refetch={refreshComponenent}
      handleRemove={handleRemove}
    />
  );
}

export default CartContainer;
