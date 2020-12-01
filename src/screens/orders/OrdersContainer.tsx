import React from 'react';
import Cart from './components/Orders';
import {useMyOrdersQuery} from 'src/apollo/generated';

export type Product = {
  productName: string;
  imageUrl: string;
  description: string;
  price: number;
};

export type Order = {
  orderDate: string;
  shipmentFee: number;
  id: number;
  status: string;
  total: number;
  products: Product[];
};

const orders: Order[] = [
  {
    orderDate: '2020-10-12',
    id: 1,
    status: 'ordered',
    shipmentFee: 4000,
    total: 500323,
    products: [
      {
        productName: 'Loung chair',
        description: 'Loung chair best value',
        price: 200000,
        imageUrl:
          'https://media.crystallize.com/furniture/20/4/24/4/loung-chair.png',
      },
      {
        productName: 'Velour sofa',
        description: 'Soft sofa with harsh price',
        price: 300323,
        imageUrl:
          'https://media.crystallize.com/furniture/20/6/17/10/velour-sofa.png',
      },
    ],
  },
  {
    orderDate: '2020-10-15',
    status: 'shipped',
    id: 2,
    shipmentFee: 2500,
    total: 232323,
    products: [
      {
        productName: 'Clothing rack with clothes',
        description: 'Clothing rack to pack your clothes compact',
        price: 232323,
        imageUrl:
          'https://media.crystallize.com/furniture/20/6/17/4/clothing-rack-with-clothes.png',
      },
    ],
  },
];
function CartContainer() {
  const {data} = useMyOrdersQuery();
  console.log('myOrders', data?.myOrders);
  return <Cart orders={orders} />;
}

export default CartContainer;
