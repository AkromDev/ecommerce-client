import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Catalogue from 'src/screens/catalogue/index';
import Product from 'src/screens/product/index';
import Article from 'src/screens/article/index';
import {StackHeaderOptions} from '@react-navigation/stack/lib/typescript/src/types';
import BottomTabs from './BottomTabs';
import Payment from 'src/screens/payment';
import {navigationRef} from 'src/utils/navigation';
import SigninScreen from 'src/screens/signin/SigninScreen';
import SignupScreen from 'src/screens/signup/SignupScreen';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          headerTransparent: true,
        }}>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{headerShown: false, ...stackStyling}}
        />
        <Stack.Screen
          name="Catalogue"
          component={Catalogue}
          options={(props) => {
            return {
              //@ts-ignore
              headerTitle: props.route.params.name,
              headerBackTitleVisible: false,
              ...stackStyling,
            };
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            headerTitle: 'Product',
            headerBackTitleVisible: false,
            ...stackStyling,
          }}
        />
        <Stack.Screen
          name="PaymentForm"
          component={Payment.Form}
          options={{
            headerTitle: 'Payment',
            headerBackTitleVisible: false,
            ...stackStyling,
          }}
        />
        <Stack.Screen
          name="PaymentConfirm"
          component={Payment.Confirm}
          options={{
            headerTitle: 'Payment',
            headerBackTitleVisible: false,
            ...stackStyling,
          }}
        />
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{
            headerBackTitleVisible: false,
            ...stackStyling,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerBackTitleVisible: false,
            ...stackStyling,
          }}
        />
        <Stack.Screen
          name="Article"
          component={Article}
          options={{
            headerTitle: '',
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: 'transparent',
              position: 'absolute',
              zIndex: 100,
              top: 0,
              left: 0,
              right: 0,
              ...(stackStyling.headerStyle as Object),
            },
            ...stackStyling,
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;

const stackStyling: StackHeaderOptions = {
  headerStyle: {
    backgroundColor: '#EFEFEF',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerLeftContainerStyle: {
    paddingLeft: 10,
  },
  headerTitleContainerStyle: {
    flex: 1,
    paddingLeft: 10,
  },
};
