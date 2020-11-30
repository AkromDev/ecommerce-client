import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {colors} from 'src/styles';
import Block from './Block';

type Props = {
  headerText?: string;
  placeholder?: string;
  value?: string;
  onTextChange?: (v: string) => void;
  secureTextEntry?: boolean;
};
function Input({
  headerText,
  placeholder,
  onTextChange,
  value,
  secureTextEntry,
}: Props) {
  return (
    <Block width="all">
      <Text style={styles.text}>{headerText}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onTextChange}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value || ''}
      />
    </Block>
  );
}
export default Input;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 0.5,
    borderRadius: 12,
    borderColor: colors.darkLighter,
    height: 44,
    paddingLeft: 15,
    marginBottom: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.dark,
  },
});
