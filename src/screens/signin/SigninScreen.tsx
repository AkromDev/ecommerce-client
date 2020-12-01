import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Header from 'src/components/Header';
import Common from 'src/components/common';
import {sizes, theme} from 'src/styles';
import navigation from 'src/utils/navigation';
import {useLoginMutation} from 'src/apollo/generated';
import storage from 'src/utils/storage';

type ErrorObject = {[key: string]: string};

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<ErrorObject>({});
  const [login, {loading}] = useLoginMutation({
    variables: {input: {email, password}},
  });
  const validateInput = () => {
    const err: ErrorObject = {};
    if (!email.includes('@')) {
      err.email = 'Email is not valid';
    }
    if (password === '') {
      err.password = 'Please enter your password';
    }
    return err;
  };
  return (
    <>
      <Header title="Sign in" noGoBack={true} />
      <View style={styles.container}>
        <Common.Input
          headerText="Email"
          placeholder="abcdef@gmail.com"
          value={email}
          onTextChange={(value) => setEmail(value)}
          error={errors.email}
        />
        <Common.Input
          headerText="Password"
          placeholder="6-10 words"
          value={password}
          secureTextEntry={true}
          onTextChange={(value) => setPassword(value)}
          error={errors.password}
        />
        <Common.Button
          title="Sign in"
          loading={loading}
          mv={20}
          width="all"
          onPress={() => {
            const errs = validateInput();
            if (Object.keys(errs).length > 0) {
              setErrors(errs);
            } else {
              login()
                .then(({data}) => {
                  if (data) {
                    storage.setToStorage('token', data.login.token).then(() => {
                      navigation.navigate('BottomTabs');
                    });
                  }
                })
                .catch((e) => {
                  Alert.alert(
                    'Login has failed',
                    e?.message || 'Please check your credentials',
                  );
                });
            }
          }}
        />
        {/* <Common.Button
          title="Forgot your password?"
          mode="text"
          txtColor={theme.blueSemantic}
          textStyle={{fontSize: 14}}
          mt={20}
          mb={20}
        /> */}
        <Common.Block
          flexDirection="row"
          justifyContent="center"
          alignItems="center">
          <Common.Txt>Don't have an account?</Common.Txt>
          <Common.Button
            title="Sign up"
            mode="text"
            loading={loading}
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
    paddingTop: 10,
    paddingHorizontal: sizes.padding,
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
