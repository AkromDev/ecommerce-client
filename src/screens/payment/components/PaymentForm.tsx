import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from 'src/components/Header';
import {sizes, theme} from 'src/styles';
import Common from 'src/components/common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import navigation from 'src/utils/navigation';

function PaymentForm() {
  const {bottom} = useSafeAreaInsets();
  return (
    <ScrollView>
      <Header title="Payment" />
      <View style={styles.container}>
        <Common.Input headerText="First Name" placeholder="John" />
        <Common.Input headerText="Last Name" placeholder="Doe" />
        <Common.Input headerText="Email" placeholder="test@gmail.com" />
        <Common.Input headerText="Phone Number" placeholder="+123456789" />
        <Common.Input headerText="Zipcode" placeholder="123456" />
        <Common.Input headerText="Shipping Address" placeholder="Address" />
        <Common.Block
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={12}>
          <Common.Txt size={16} fontWeight="500" color={theme.darkLighter}>
            Product price
          </Common.Txt>
          <Common.Txt fontWeight="600" size={14} color={theme.darkLighter}>
            ₩637000
          </Common.Txt>
        </Common.Block>
        <Common.Block
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={12}>
          <Common.Txt size={16} fontWeight="500" color={theme.darkLighter}>
            Shipping price
          </Common.Txt>
          <Common.Txt fontWeight="600" size={14} color={theme.darkLighter}>
            ₩3000
          </Common.Txt>
        </Common.Block>
        <Common.Block
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={12}>
          <Common.Txt size={16} fontWeight="500" color={theme.dark}>
            Total
          </Common.Txt>
          <Common.Txt fontWeight="bold" size={22} color={theme.primary}>
            ₩640000
          </Common.Txt>
        </Common.Block>
        <Common.Button
          title="Complete"
          style={styles.formButton}
          mt={30}
          mb={bottom + 20}
          width="all"
          onPress={() => navigation.navigate('PaymentConfirm')}
        />
      </View>
    </ScrollView>
  );
}

export default PaymentForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizes.padding,
    paddingTop: 10,
  },
  formButton: {},
});
