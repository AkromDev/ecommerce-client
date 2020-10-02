import Card from 'src/components/category-microformat';
import Loading from 'src/components/loading';
import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {useQuery} from 'urql';
import query from './query';
import styles from './styles';
import Grid from 'src/components/grid';

const Home = ({navigation}: any) => {
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
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Welcome</Text>
        <FlatList
          data={folder.children}
          renderItem={(item) => <Card {...item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          style={{paddingLeft: 20, paddingTop: 10, paddingBottom: 15}}
        />
        <Grid {...grid} />
      </ScrollView>
    </View>
  );
};

export default Home;
