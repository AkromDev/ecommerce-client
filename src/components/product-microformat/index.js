import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';

const ProductCard = ({product}) => {
  return (
    <TouchableOpacity
      style={{...styles.btn, flex: 1}}
      // onPress={() => navigation.navigate('Product', {...item})}
    >
      <Image
        style={styles.image}
        source={{
          uri: product.imageUrl,
        }}
      />
      <View style={styles.footer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
