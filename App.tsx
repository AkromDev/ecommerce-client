import React from 'react';
import 'react-native-gesture-handler';
import RootNavigation from './src/navigation/RootNavigation';
import client from './src/apollo/client';
import {ApolloProvider} from '@apollo/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootNavigation />
    </ApolloProvider>
  );
};

export default App;
