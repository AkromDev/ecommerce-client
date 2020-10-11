import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputForm from 'src/components/common-components/InputForm';
import FormButton from 'src/components/common-components/FormButton';
import Header from 'src/components/Header';
import {sizes} from 'src/styles';
import Common from 'src/components/common';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');

  return (
    <>
      <Header title="Sign up" />
      <View style={styles.container}>
        <InputForm
          headerText="Name"
          placeholder="Hung Kieu"
          setValue={(value) => setName(value)}
        />
        <InputForm
          headerText="Email"
          placeholder="abcde@gmail.com"
          setValue={(value) => setEmail(value)}
        />
        <InputForm
          headerText="Password"
          placeholder="6-20 words"
          setValue={(value) => setPassword(value)}
        />
        <InputForm
          headerText="Repeat password"
          placeholder="6-20 words"
          setValue={(value) => setRepeat(value)}
        />
        <Common.Button title="Sign up" style={styles.formButton} mt={30} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: sizes.padding,
  },
  formButton: {},
});
