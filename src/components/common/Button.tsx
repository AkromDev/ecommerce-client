import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  StyleProp,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import {sizes, theme} from 'src/styles';
import {fontWeightType, getSpace, Space} from './helpers';
import Text from './Txt';

export interface ButtonProps extends TouchableOpacityProps, Space {
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  disabled?: boolean;
  mode?: 'regular' | 'outline' | 'text';
  txtColor?: string;
  fontWeight?: fontWeightType;
  width?: 'all' | number | string;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
}

const Button = ({
  title,
  mode = 'regular',
  disabled,
  left,
  right,
  style,
  txtColor,
  fontWeight,
  textStyle,
  loading,
  ...rest
}: ButtonProps) => {
  const textColor = {
    text: theme.black,
    outline: theme.primary,
    regular: theme.dark,
  };
  const {width} = rest;
  return (
    <TouchableOpacity
      style={[
        mode !== 'text' && styles.container,
        disabled && styles.disabled,
        mode === 'outline' && styles.outline,
        mode === 'text' && styles.textButton,
        (rest.hasOwnProperty('width') && width !== 'all' && {width}) || null,
        width === 'all' && {width: '100%'},
        style && style,
        getSpace(rest),
      ]}
      disabled={disabled || loading}
      activeOpacity={0.75}
      {...rest}>
      {left && left}
      <Text
        color={txtColor || textColor[mode]}
        size="md"
        fontWeight={fontWeight || '500'}
        style={textStyle}>
        {loading ? <ActivityIndicator /> : title}
      </Text>
      {right && right}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  title: 'Click Me',
  type: 'primary',
  disabled: false,
};

export default Button;

const styles = StyleSheet.create({
  container: {
    maxHeight: 50,
    borderRadius: sizes.radius,
    backgroundColor: theme.primary,
    height: 50,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.4,
  },
  outline: {
    borderWidth: 1,
    borderColor: theme.greyLight,
    backgroundColor: theme.primary,
  },
  textButton: {
    backgroundColor: 'transparent',
    height: 'auto',
  },
});
