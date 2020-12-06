import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import navigation from 'src/utils/navigation';
import styles from './styles';

const ProductCard = ({product}) => {
  return (
    <TouchableOpacity
      style={{...styles.btn, flex: 1}}
      onPress={() => navigation.navigate('Product', {product})}>
      <Image
        style={styles.image}
        source={{
          uri: product.imageUrl,
        }}
      />
      <View style={styles.footer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
