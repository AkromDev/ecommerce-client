import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'src/screens/home';
import CartContainer from 'src/screens/cart';
import ProfileContainer from 'src/screens/profile';
import {theme} from 'src/styles/theme';
import HomeIcon from 'src/svgicons/Home';
import CartIcon from 'src/svgicons/Cart';
import Avatar from 'src/svgicons/Avatar';
import OrdersContainer from 'src/screens/orders/OrdersContainer';
import Receipt from 'src/svgicons/Receipt';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'Home',
    component: Home,
    icon: ({color, size: _}: any) => <HomeIcon fill={color} />,
  },
  {
    name: 'Cart',
    component: CartContainer,
    icon: ({color, size: _}: any) => <CartIcon fill={color} />,
    private: true,
  },
  {
    name: 'Orders',
    component: OrdersContainer,
    icon: ({color, size: _}: any) => <Receipt fill={color} />,
    private: true,
  },
  {
    name: 'Profile',
    component: ProfileContainer,
    icon: ({color, size: _}: any) => <Avatar fill={color} />,
    private: true,
  },
];

const BottomTabs = ({}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.bottomNavigation.active,
        inactiveTintColor: theme.bottomNavigation.inactive,
      }}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          component={tab.component}
          options={{tabBarIcon: tab.icon}}
          name={tab.name}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabs;
