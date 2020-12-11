import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

type Props = {
  errorText?: string;
};
function LoadingOrError({errorText}: Props) {
  return (
    <SafeAreaView>
      <View>
        <Text>{errorText || 'Something went wrong'}</Text>
      </View>
    </SafeAreaView>
  );
}

export default LoadingOrError;
