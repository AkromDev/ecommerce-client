import React from 'react';
import Cart from './components/Cart';

export type Product = {
  productName: string;
  imageUrl: string;
  description: string;
  price: number;
};

const data: Product[] = [
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
  {
    productName: 'Clothing rack with clothes',
    description: 'Clothing rack to pack your clothes compact',
    price: 232323,
    imageUrl:
      'https://media.crystallize.com/furniture/20/6/17/4/clothing-rack-with-clothes.png',
  },
];
function CartContainer() {
  return <Cart data={data} />;
}

export default CartContainer;
