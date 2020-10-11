import {useQuery} from 'urql';
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Loading from 'src/components/loading';

import ProductCard from 'src/components/product-microformat';

import query from './query';

const Catalogue = ({navigation, route}) => {
  const [{fetching, error, data}] = useQuery({
    query: query,
    variables: {
      language: 'en',
      path: route.params.path,
    },
  });
  if (fetching) {
    return <Loading />;
  }
  if (error) {
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );
  }
  const {folder} = data;
  return (
    <View style={styles.container}>
      <FlatList
        data={folder.children}
        renderItem={(item) => <ProductCard {...item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={styles.flatList}
        contentContainerStyle={{paddingVertical: 80}}
      />
    </View>
  );
};

export default Catalogue;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 8,
    marginVertical: 30,
    paddingLeft: 40,
  },
  flatList: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
});
