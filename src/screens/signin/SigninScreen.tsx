import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import InputForm from 'src/components/common-components/InputForm';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from 'src/components/Header';
import Common from 'src/components/common';
import {sizes} from 'src/styles';

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Header title="Sign in" />
      <View style={styles.container}>
        <InputForm
          headerText="Email"
          placeholder="abcdef@gmail.com"
          setValue={(value) => setEmail(value)}
        />
        <InputForm
          headerText="Password"
          placeholder="6-10 words"
          setValue={(value) => setPassword(value)}
        />
        <View>
          <Common.Block mt={10} clickable>
            <Common.Txt>Forgot your password?</Common.Txt>
          </Common.Block>
        </View>
        <Common.Button title="Sign in" style={{width: '100%'}} mv={20} />
        <View style={styles.bottomText}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
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
  },
});
