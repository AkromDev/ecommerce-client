import Catalogue from 'src/screens/catalogue/index';
import Product from 'src/screens/product/index';
import Article from 'src/screens/article/index';
import BottomTabs from './BottomTabs';
import Payment from 'src/screens/payment';
import SigninScreen from 'src/screens/signin/SigninScreen';
import SignupScreen from 'src/screens/signup/SignupScreen';
import OrderDetailsContainer from 'src/screens/orderdetails';
import {StackHeaderOptions} from '@react-navigation/stack/lib/typescript/src/types';
import SplashScreen from 'src/splash';

const options = {
  headerTitle: '',
  headerBackTitleVisible: false,
  ...getStackStyle(),
};

const routes = [
  {name: 'Splash', component: SplashScreen, options},
  {
    name: 'BottomTabs',
    component: BottomTabs,
    options: {headerShown: false, ...getStackStyle()},
  },
  {name: 'Catalogue', component: Catalogue, options},
  {name: 'Product', component: Product, options},
  {name: 'PaymentForm', component: Payment.Form, options},
  {name: 'PaymentConfirm', component: Payment.Confirm, options},
  {name: 'OrderDetails', component: OrderDetailsContainer, options},
  {name: 'Signin', component: SigninScreen, options},
  {name: 'Signup', component: SignupScreen, options},
  {
    name: 'Article',
    component: Article,
    options: {
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
        ...(getStackStyle().headerStyle as Object),
      },
      ...getStackStyle(),
      headerTintColor: '#fff',
    },
  },
];

export default routes;

function getStackStyle() {
  const style: StackHeaderOptions = {
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
  return style;
}
