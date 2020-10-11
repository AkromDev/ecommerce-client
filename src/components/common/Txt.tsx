import React, {ReactNode} from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';
import {sizes} from 'src/styles';
import {fontWeightType, getSpace, SizeType, Space} from './helpers';

export interface TxtProps extends TextProps, Space {
  size?: number | SizeType;
  color?: string;
  textTransform?: 'uppercase' | 'lowercase';
  children: ReactNode | ReactNode[];
  fontWeight?: fontWeightType;
  letterSpacing?: number;
  lineHeight?: number;
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
    paddingVertical: 1,
  },
});

const textSizes = sizes.text;

const Txt = ({
  children,
  textTransform,
  size,
  color,
  style,
  fontWeight,
  letterSpacing,
  lineHeight,
  ...props
}: TxtProps) => {
  return (
    <Text
      style={[
        styles.text,
        (typeof size === 'string' &&
          sizes.text[size] && {fontSize: textSizes[size]}) ||
          null,
        typeof size === 'number' && {fontSize: size},
        style && style,
        (color && {color}) || null,
        (letterSpacing && {letterSpacing}) || null,
        (lineHeight && {lineHeight}) || null,
        fontWeight && {fontWeight},
        textTransform && {textTransform},
        getSpace(props),
      ]}
      {...props}>
      {children}
    </Text>
  );
};

Txt.defaultProps = {
  size: textSizes.sm,
  weight: 'regular',
  type: 'primary',
  textTransform: 'none',
};

export default Txt;
