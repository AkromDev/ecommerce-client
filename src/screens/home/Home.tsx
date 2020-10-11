import CategoryItem from 'src/screens/home/components/CategoryItem';
import Loading from 'src/components/loading';
import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useQuery} from 'urql';
import query from './query';
import Grid from 'src/components/grid';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Home = ({navigation}: any) => {
  const {top: paddingTop = 0} = useSafeAreaInsets();
  console.log(navigation);
  const [{fetching, error, data}] = useQuery({
    query: query,
    variables: {
      language: 'en',
      path: '/shop',
    },
  });
  if (fetching) {
    return <Loading />;
  }
  if (error) {
    console.log('error', error);
    return (
      <View>
        <Text>Something went wrong</Text>
      </View>
    );
  }
  const {folder, grid} = data;
  console.log('data', grid);
  return (
    <View style={[styles.container]}>
      <ScrollView>
        <FlatList
          data={folder.children}
          renderItem={(item) => <CategoryItem {...item} />}
          contentContainerStyle={{paddingRight: 30}}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={[styles.flatList, {paddingTop: paddingTop + 50}]}
        />
        <Grid {...grid} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 8,
    marginVertical: 30,
    paddingLeft: 20,
    paddingTop: 100,
  },
  flatList: {
    paddingLeft: 20,
    paddingBottom: 25,
  },
});
