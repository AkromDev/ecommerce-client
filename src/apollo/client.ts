import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';

import {onError} from '@apollo/client/link/error';
import {setContext} from '@apollo/client/link/context';
import storage from 'src/utils/storage';

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});
const authLink = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = storage.token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  };
});

const link = from([
  errorLink,
  authLink,
  createHttpLink({uri: 'http://localhost:4000/graphql'}),
]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});
export default client;
