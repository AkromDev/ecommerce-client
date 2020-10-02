import React from 'react';
import 'react-native-gesture-handler';
import {Provider, createClient} from 'urql';
import RootNavigation from 'src/navigation/RootNavigation';

const client = createClient({
  url: 'https://api.crystallize.com/furniture/catalogue',
});

const App = () => {
  return (
    <Provider value={client}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
