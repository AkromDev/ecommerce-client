import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputForm from 'src/components/common-components/InputForm';
import FormButton from 'src/components/common-components/FormButton';
//import styles from 'src/components/document-microformat/styles';

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');

  return (
    <View style={styles.container}>
      <View>
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
      </View>

      <FormButton title="Sign up" style={styles.formButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 150,
  },
  formButton: {},
});
