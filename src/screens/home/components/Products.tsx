import React from 'react';

import { FlatList, View} from 'react-native';
import Product from 'src/components/product-microformat';

const renderItems = ({item}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
         <Product product={item} />
    </View>
  );
};

const Grid = ({products, dude}) => {
  return (
    <FlatList
    columnWrapperStyle={{
      flex: 1,
      justifyContent: 'space-evenly',
    }}
    numColumns={2}
      data={products}
      style={{
        paddingLeft: 15,
        paddingTop: 0,
        paddingRight: 15,
        paddingBottom: 15,
      }}
      renderItem={(item) => renderItems(item)}
    />
  );
};

export default Grid;
