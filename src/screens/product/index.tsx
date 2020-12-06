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
import styles from './styles';

const Product = ({route}) => {
  const product = route.params.product as ProductFieldsFragment;
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
        <TouchableOpacity
          style={styles.buyBtn}
          onPress={() => Alert.alert('@TODO add buy functionality')}>
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
