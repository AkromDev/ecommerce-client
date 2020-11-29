import {CommonActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import storage from 'src/utils/storage';
import Splash from 'assets/svgs/splash.svg';

function SplashScreen(props) {
  const {navigation} = props;

  const moveTo = (nextScreen: 'Signin' | 'BottomTabs') => {
    // Go to the next page. However, don't make it possible to come back to the splash screen.
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({index: 1, routes: [{name: nextScreen}]}),
      );
    }, 300);
  };

  useEffect(() => {
    async function func() {
      const token = await storage.initializeStorage();
      if (token) {
        moveTo('BottomTabs');
      } else {
        moveTo('Signin');
      }
    }
    func();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Splash />
    </View>
  );
}

export default SplashScreen;
