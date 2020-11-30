import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {sizes, Styles, theme} from 'src/styles';
import ArrowLeft from 'assets/svgs/arrow-left.svg';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Common from './common';
import navigation from 'src/utils/navigation';
type Props = {
  title: string;
  noGoBack: boolean;
};
function Header(props: Props) {
  const {title, noGoBack} = props;
  const {top = 0} = useSafeAreaInsets();
  return (
    <Common.Block pt={top + 30} pb={30} ph={sizes.padding}>
      {noGoBack ? (
        <View style={{height: 44}} />
      ) : (
        <TouchableOpacity
          style={[Styles.shadow, styles.backBtn]}
          onPress={navigation.goBack}>
          <ArrowLeft />
        </TouchableOpacity>
      )}

      <Common.Block>
        <Common.Txt
          color={theme.dark}
          style={{marginTop: -33}}
          fontWeight="bold"
          size={18}
          textAlign="center">
          {title}
        </Common.Txt>
      </Common.Block>
    </Common.Block>
  );
}

export default Header;

const styles = StyleSheet.create({
  backBtn: {
    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    shadowOpacity: 0.04,
    zIndex: 9,
  },
});
