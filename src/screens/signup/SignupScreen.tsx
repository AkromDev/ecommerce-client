import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Alert} from 'react-native';
import Header from 'src/components/Header';
import {sizes, theme} from 'src/styles';
import Common from 'src/components/common';
import navigation from 'src/utils/navigation';
import {useSignupMutation} from 'src/apollo/generated';

type ErrorObject = {[key: string]: string};

export default function SignupScreen() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<ErrorObject>({});
  const [signup, {loading}] = useSignupMutation({
    variables: {
      input: {
        firstName,
        lastName,
        email,
        password,
      },
    },
  });

  const validateInput = () => {
    const errs: ErrorObject = {};
    if (firstName === '') {
      errs.firstName = 'First name is required';
    }
    if (lastName === '') {
      errs.lastName = 'Last name is required';
    }
    if (!email.includes('@')) {
      errs.email = 'Email is not valid';
    }
    if (password.length < 6) {
      errs.password = 'Password should be at least 6 characters';
    }
    return errs;
  };

  return (
    <ScrollView>
      <Header title="Sign up" />
      <View style={styles.container}>
        <Common.Input
          headerText="First name"
          placeholder="Hung Kieu"
          onTextChange={(value) => setFirstname(value)}
          value={firstName}
          error={errors.firstName}
        />
        <Common.Input
          headerText="Last name"
          placeholder="Hung Kieu"
          onTextChange={(value) => setLastname(value)}
          value={lastName}
          error={errors.lastName}
        />
        <Common.Input
          headerText="Email"
          placeholder="abcde@gmail.com"
          onTextChange={(value) => setEmail(value)}
          value={email}
          error={errors.email}
        />
        <Common.Input
          headerText="Password"
          placeholder="6-20 words"
          onTextChange={(value) => setPassword(value)}
          value={password}
          error={errors.password}
          secureTextEntry={true}
        />
        <Common.Button
          title="Sign up"
          loading={loading}
          style={styles.formButton}
          mt={30}
          width="all"
          onPress={() => {
            const err = validateInput();
            if (Object.keys(err).length > 0) {
              setErrors(err);
            } else {
              signup()
                .then(() => {
                  Alert.alert(
                    'Confirmation email',
                    'Confirmation email is sent to ' +
                      email +
                      '. You need to confirm your email before logging in',
                    [
                      {
                        text: 'Confirm',
                        onPress: () => navigation.navigate('Signin'),
                      },
                    ],
                  );
                })
                .catch((e) => {
                  Alert.alert(
                    'Signup has failed',
                    e?.message || 'Please check your input',
                  );
                });
            }
          }}
        />
        <Common.Block
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          mt={20}>
          <Common.Txt>Already have an account?</Common.Txt>
          <Common.Button
            title="Sign in"
            mode="text"
            ml={5}
            loading={loading}
            onPress={() => navigation.navigate('Signin')}
            txtColor={theme.blueSemantic}
          />
        </Common.Block>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: sizes.padding,
    paddingTop: 10,
  },
  formButton: {},
});
