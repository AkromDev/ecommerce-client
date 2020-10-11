import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default function InputForm({headerText, placeholder, setValue}) {
  return (
    <View>
      <Text style={styles.text}>{headerText}</Text>
      <TextInput
        style={styles.TextInput}
        placeholder={placeholder}
        onChangeText={(value) => setValue(value)}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#989898',
    width: 350,
    height: 40,
    paddingLeft: 15,
    margin: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '300',
    paddingLeft: 5,
  },
});
