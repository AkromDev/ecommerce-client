import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import InputForm from 'src/components/common/Input';
import Header from 'src/components/Header';
import Common from 'src/components/common';
import {sizes, theme} from 'src/styles';
import navigation from 'src/utils/navigation';

export default function SigninScreen() {
  const [, setEmail] = useState('');
  const [, setPassword] = useState('');

  return (
    <>
      <Header title="Sign in" />
      <View style={styles.container}>
        <InputForm
          headerText="Email"
          placeholder="abcdef@gmail.com"
          onTextChange={(value) => setEmail(value)}
        />
        <InputForm
          headerText="Password"
          placeholder="6-10 words"
          onTextChange={(value) => setPassword(value)}
        />
        <Common.Button title="Sign in" mv={20} width="all" />
        <Common.Button
          title="Forgot your password?"
          mode="text"
          txtColor={theme.blueSemantic}
          textStyle={{fontSize: 14}}
          mt={20}
          mb={20}
        />
        <Common.Block
          flexDirection="row"
          justifyContent="center"
          alignItems="center">
          <Common.Txt>Don't have an account?</Common.Txt>
          <Common.Button
            title="Sign up"
            mode="text"
            ml={5}
            onPress={() => navigation.navigate('Signup')}
            txtColor={theme.blueSemantic}
          />
        </Common.Block>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: sizes.padding,
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
