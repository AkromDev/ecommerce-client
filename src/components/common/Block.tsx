import React from 'react';
import {View, ViewProps, ViewStyle, FlexStyle, StyleProp} from 'react-native';
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
  width,
  ...props
}: Props) => {
  return (
    <View
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
        center && Styles.center,
        getSpace(props),
        style && style,
      ]}
      {...props}>
      {children}
    </View>
  );
};
export default Block;
