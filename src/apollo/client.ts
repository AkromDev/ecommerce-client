import {ApolloClient, InMemoryCache, createHttpLink, from} from '@apollo/client'

import {onError} from '@apollo/client/link/error'

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

const link = from([
  errorLink,
  createHttpLink({uri: 'http://localhost:4000/graphql'})
])

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})
export default client
