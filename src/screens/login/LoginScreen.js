import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import InputForm from 'src/components/common-components/InputForm';
import FormButton from 'src/components/common-components/FormButton';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View>
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
          <Button style={styles.forgotButton} title="Forgot your password?" />
        </View>
        <FormButton title="Sign in" />
        <View style={styles.bottomText}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
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
