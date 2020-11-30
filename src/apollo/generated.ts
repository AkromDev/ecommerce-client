import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  products: Array<Product>;
  product: Product;
  myOrders: Array<Order>;
  myOrder: Order;
  stores: Array<Store>;
  store: Store;
  me: User;
};


export type QueryProductArgs = {
  _id: Scalars['ID'];
};


export type QueryMyOrderArgs = {
  orderId: Scalars['ID'];
};


export type QueryStoreArgs = {
  _id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createStore: Store;
  createProduct: Product;
  createOrder: Order;
  signup: RegularResponse;
  resendConfirmation: RegularResponse;
  sendResetPasswordOTP: SendResetPasswordOtpRes;
  resetPassword: RegularResponse;
  login: Token;
};


export type MutationCreateStoreArgs = {
  input: CreateStoreInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationResendConfirmationArgs = {
  input: EmailInput;
};


export type MutationSendResetPasswordOtpArgs = {
  input: EmailInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID'];
  title: Scalars['String'];
  price: Scalars['Int'];
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  storeId: Scalars['ID'];
  store: Store;
};

export type Store = {
  __typename?: 'Store';
  _id: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  products: Array<Product>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  isVerified: Scalars['Boolean'];
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type RegularResponse = {
  __typename?: 'RegularResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type SendResetPasswordOtpRes = {
  __typename?: 'SendResetPasswordOTPRes';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  userId: Scalars['ID'];
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
  userId: Scalars['ID'];
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['ID'];
  userId: Scalars['ID'];
  user: User;
  productsOrdered: Array<ProductOrdered>;
};

export type ProductOrdered = {
  __typename?: 'ProductOrdered';
  quantity: Scalars['Int'];
  product: Product;
};

export type CreateStoreInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  address?: Maybe<Scalars['String']>;
};

export type CreateProductInput = {
  storeId: Scalars['ID'];
  title: Scalars['String'];
  price: Scalars['Int'];
  imageUrl: Scalars['String'];
  description: Scalars['String'];
};

export type SignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type EmailInput = {
  email: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ResetPasswordInput = {
  password: Scalars['String'];
  otp: Scalars['Int'];
  userId: Scalars['ID'];
};

export type CreateOrderInput = {
  products: Array<OrderProduct>;
};

export type OrderProduct = {
  productId: Scalars['ID'];
  quantity: Scalars['Int'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type ProductFieldsFragment = (
  { __typename?: 'Product' }
  & Pick<Product, '_id' | 'title' | 'imageUrl' | 'storeId' | 'description' | 'price'>
);

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & ProductFieldsFragment
  )> }
);

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'Token' }
    & Pick<Token, 'token' | 'userId'>
  ) }
);

export type SignupMutationVariables = Exact<{
  input: SignupInput;
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'RegularResponse' }
    & Pick<RegularResponse, 'success' | 'message'>
  ) }
);

export const ProductFieldsFragmentDoc = gql`
    fragment ProductFields on Product {
  _id
  title
  imageUrl
  storeId
  description
  price
}
    `;
export const ProductsDocument = gql`
    query products {
  products {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    token
    userId
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation signup($input: SignupInput!) {
  signup(input: $input) {
    success
    message
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;