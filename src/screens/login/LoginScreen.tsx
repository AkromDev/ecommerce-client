import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import InputForm from 'src/components/common/Input';
import FormButton from 'src/components/common-components/FormButton';
import Common from 'src/components/common';

export default function LoginScreen() {
  const [, setEmail] = useState('');
  const [, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View>
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
        <FormButton title="Sign in" />
        <View style={styles.bottomText}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.forgotButton}>
        <Common.Txt>Forgot your password?</Common.Txt>
      </TouchableOpacity>
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

  forgotButton: {},

  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
