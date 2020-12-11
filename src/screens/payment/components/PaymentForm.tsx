import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from 'src/components/Header';
import {sizes, theme} from 'src/styles';
import Common from 'src/components/common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import navigation from 'src/utils/navigation';

type Props = {
  products: any;
};
function PaymentForm(props) {
  const {bottom} = useSafeAreaInsets();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const {total, products} = props;
  const onContinue = () => {
    const err: {[key: string]: string} = {};
    if (!name.trim()) {
      err.name = 'Name is required';
    }
    if (!phone.trim()) {
      err.phone = 'Phone number is required';
    }
    if (!zipcode.trim()) {
      err.zipcode = 'Zipcode is required';
    }
    if (!address.trim()) {
      err.address = 'Address is required';
    }
    if (Object.keys(err).length > 0) {
      setErrors(err);
    } else {
      navigation.navigate('PaymentConfirm', {
        receiver: {name, zipcode, address, phone},
        products,
      });
    }
  };
  return (
    <ScrollView>
      <Header title="Payment" />
      <View style={styles.container}>
        <Common.Input
          headerText="Receiver's Name"
          value={name}
          onTextChange={(v) => setName(v)}
          placeholder="John Doe"
          error={errors.name}
        />
        <Common.Input
          headerText="Phone Number"
          value={phone}
          onTextChange={(v) => setPhone(v)}
          placeholder="+123456789"
          error={errors.phone}
        />
        <Common.Input
          headerText="Zipcode"
          value={zipcode}
          onTextChange={(v) => setZipcode(v)}
          placeholder="123456"
          error={errors.zipcode}
        />
        <Common.Input
          headerText="Shipping Address"
          value={address}
          onTextChange={(v) => setAddress(v)}
          placeholder="Address"
          error={errors.address}
        />
        <Common.Block
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt={12}>
          <Common.Txt size={16} fontWeight="500" color={theme.darkLighter}>
            Product price
          </Common.Txt>
          <Common.Txt fontWeight="600" size={14} color={theme.darkLighter}>
            ${total}
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
            $4
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
            ${total + 4}
          </Common.Txt>
        </Common.Block>
        <Common.Button
          title="Continue"
          style={styles.formButton}
          mt={30}
          mb={bottom + 20}
          width="all"
          onPress={onContinue}
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
