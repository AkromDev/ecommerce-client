import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {StyleSheet, TouchableOpacity, Image} from 'react-native';

const Card = ({item}) => {
  const navigation = useNavigation();
  const image = item?.components.find((c) => c.name === 'Icon')?.content
    ?.images?.[0];
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate('Catalogue', {...item})}>
      <Image
        style={styles.image}
        source={{
          uri: image.url,
        }}
      />
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    width: 80,
    height: 80,
    marginRight: 14,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 7,
    borderRadius: 80 / 2,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 2,
  },
});
