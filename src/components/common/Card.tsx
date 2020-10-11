import React, {ReactNode} from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  StyleProp,
} from 'react-native';
import {Styles} from 'src/styles';
import {getSpace, Space} from './helpers';

export const CARD_BORDER_RADIUS = 16;

export interface Props extends Space {
  containerStyle?: ViewStyle;
  children: ReactNode | ReactNode[];
  backgroundColor?: string;
  padding?: number;
  borderRadius?: number;
  clickable?: boolean;
  onPress?: () => void;
}

const Comp = (p: Props & {style: StyleProp<ViewStyle>}) =>
  p.clickable ? <TouchableOpacity {...p} /> : <View {...p} />;

const Card = (props: Props) => {
  const {
    backgroundColor,
    borderRadius,
    containerStyle,
    children,
    ...rest
  } = props;
  return (
    <Comp
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
    </Comp>
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
