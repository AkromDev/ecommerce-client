import React from 'react';
import {
  View,
  ViewProps,
  ViewStyle,
  FlexStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import {Styles} from 'src/styles';
import {getSpace, Space} from './helpers';

export interface Props extends ViewProps, Space {
  flexGrow?: FlexStyle['flexGrow'];
  flex?: FlexStyle['flex'];
  center?: boolean;
  flexDirection?: FlexStyle['flexDirection'];
  flexShrink?: FlexStyle['flexShrink'];
  alignItems?: FlexStyle['alignItems'];
  flexBasis?: FlexStyle['flexBasis'];
  justifyContent?: FlexStyle['justifyContent'];
  children: React.ReactNode | React.ReactNode[];
  style?: StyleProp<ViewStyle>;
  clickable?: boolean;
  onPress?: () => void;
  width?: 'all' | number | string;
}

const Block = ({
  alignItems,
  style,
  justifyContent,
  children,
  flexGrow,
  flexShrink,
  center,
  flex,
  flexDirection,
  flexBasis,
  clickable,
  width,
  ...props
}: Props) => {
  const Comp = (p: Props) =>
    clickable ? <TouchableOpacity {...p} /> : <View {...p} />;

  return (
    <Comp
      style={[
        (flex && {flex}) || null,
        (flexGrow && {flexGrow}) || null,
        (flexShrink && {flexShrink}) || null,
        (flexBasis && {flexBasis}) || null,
        flexDirection && {flexDirection},
        alignItems && {alignItems},
        justifyContent && {justifyContent},
        ((width || width === 0) && width !== 'all' && {width}) || null,
        width === 'all' && {width: '100%'},
        style && style,
        center && Styles.center,
        getSpace(props),
      ]}
      {...props}>
      {children}
    </Comp>
  );
};
export default Block;
