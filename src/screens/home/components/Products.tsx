import React from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import {ProductFieldsFragment} from 'src/apollo/generated';
import Product from 'src/components/product-microformat';

type Props = {
  products: ProductFieldsFragment[];
};
const Products = ({products}: Props) => {
  return (
    <FlatList
      numColumns={2}
      data={products}
      style={styles.flatlist}
      keyExtractor={(item) => item._id}
      renderItem={({item}) => (
        <View style={{flex: 1}}>
          <Product product={item} />
        </View>
      )}
    />
  );
};

export default Products;

const styles = StyleSheet.create({
  flatlist: {
    paddingLeft: 15,
    paddingTop: 0,
    paddingRight: 15,
    paddingBottom: 15,
  },
});
