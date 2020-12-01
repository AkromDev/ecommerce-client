import React from 'react';
import {Text, TextInput, StyleSheet, TextInputProps} from 'react-native';
import {colors} from 'src/styles';
import Block from './Block';

type Props = {
  headerText?: string;
  placeholder?: string;
  value: string;
  error?: string;
  onTextChange?: (v: string) => void;
  secureTextEntry?: boolean;
  inputProps?: TextInputProps;
};
function Input({
  headerText,
  placeholder,
  onTextChange,
  value,
  secureTextEntry,
  error,
  ...inputProps
}: Props) {
  return (
    <Block width="all" mb={15}>
      <Text style={styles.text}>{headerText}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onTextChange}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value || ''}
        {...inputProps}
      />
      {!!error && (
        <Text style={{fontSize: 12, color: colors.redSemantic}}>{error}</Text>
      )}
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
    marginBottom: 7,
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.dark,
  },
});
