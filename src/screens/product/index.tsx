import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ProductFieldsFragment} from 'src/apollo/generated';
import Header from 'src/components/Header';
import storage from 'src/utils/storage';
import styles from './styles';

const Product = ({route}) => {
  const product = route.params.product as ProductFieldsFragment;
  const onProductAdd = () => {
    const cartItems = storage.getCartItems();
    if (cartItems[product._id] > 0) {
      Alert.alert('This product is already in cart');
    } else {
      cartItems[product._id] = 1;
      storage.setCartItems(cartItems, () => {
        storage.notifyCartListener();
        Alert.alert('Successfully added to cart');
      });
    }
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Header
          title="Details"
          containerStyle={{paddingBottom: 15, backgroundColor: '#EFEFEF'}}
        />
        <Image style={styles.image} source={{uri: product.imageUrl}} />

        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.summary}>{product.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.actions}>
        <View style={styles.priceLabel}>
          <Text style={styles.price}>${product.price}</Text>
        </View>
        <TouchableOpacity style={styles.buyBtn} onPress={onProductAdd}>
          <Image
            style={styles.buyIcon}
            source={require('assets/images/shopping-bag.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;
