import {CommonActions, NavigationContainerRef} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createRef<NavigationContainerRef>();

const navigate = (routeName: string, params = {}) => {
  navigationRef.current?.navigate(routeName, params);
};
const goBack = () => {
  navigationRef.current?.dispatch(CommonActions.goBack());
};

const getCurrentRoute = () => {
  const navState = navigationRef?.current?.getRootState();
  return navState;
};

const reset = () => {
  navigationRef.current?.resetRoot({
    index: 0,
    routes: [{name: 'Home'}],
  });
};

const navigation = {
  navigate,
  goBack,
  getCurrentRoute,
  reset,
};

export default navigation;
