import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from 'src/utils/navigation';
import routes from './routes';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          headerTransparent: true,
        }}>
        {routes.map((route) => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={route.options as any}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
