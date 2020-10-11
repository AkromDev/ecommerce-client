import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from 'src/components/Header';
import {sizes, theme} from 'src/styles';
import Common from 'src/components/common';
import navigation from 'src/utils/navigation';

export default function SignupScreen() {
  const [, setName] = useState('');
  const [, setEmail] = useState('');
  const [, setPassword] = useState('');
  const [, setRepeat] = useState('');

  return (
    <ScrollView>
      <Header title="Sign up" />
      <View style={styles.container}>
        <Common.Input
          headerText="Name"
          placeholder="Hung Kieu"
          onTextChange={(value) => setName(value)}
        />
        <Common.Input
          headerText="Email"
          placeholder="abcde@gmail.com"
          onTextChange={(value) => setEmail(value)}
        />
        <Common.Input
          headerText="Password"
          placeholder="6-20 words"
          onTextChange={(value) => setPassword(value)}
        />
        <Common.Input
          headerText="Repeat password"
          placeholder="6-20 words"
          onTextChange={(value) => setRepeat(value)}
        />
        <Common.Button
          title="Sign up"
          style={styles.formButton}
          mt={30}
          width="all"
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
