import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {Styles} from 'src/styles';
import {getSpace, Space} from './helpers';

export const CARD_BORDER_RADIUS = 16;

export interface Props extends Space {
  containerStyle?: ViewStyle;
  children: ReactNode | ReactNode[];
  backgroundColor?: string;
  padding?: number;
  borderRadius?: number;
  onPress?: () => void;
}

const Card = (props: Props) => {
  const {
    backgroundColor,
    borderRadius,
    containerStyle,
    children,
    ...rest
  } = props;
  return (
    <View
      style={[
        styles.container,
        Styles.shadow,
        containerStyle,
        (backgroundColor && {backgroundColor}) || null,
        (typeof borderRadius === 'number' && {borderRadius}) || null,
        getSpace(rest),
      ]}
      {...rest}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: CARD_BORDER_RADIUS,
  },
});
