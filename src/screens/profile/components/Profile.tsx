import React from 'react';
import {ScrollView} from 'react-native';
import Common from 'src/components/common';
import Header from 'src/components/Header';
import {sizes} from 'src/styles';

function Profile() {
  return (
    <ScrollView>
      <Header title="Profile" />
      <Common.Block pt={20} alignItems="center" ph={sizes.padding}>
        <Common.Input headerText="Name" placeholder="Hung Kieu" />
        <Common.Input headerText="Account Name" placeholder="Winterboiz" />
        <Common.Input headerText="Date" placeholder="18/08/1994" />
        <Common.Input headerText="Address" placeholder="Ha Dong, Ha Noi" />
        <Common.Input headerText="Phone Number" placeholder="+8822883344" />
        <Common.Input headerText="Email" placeholder="abcde@gmail.com" />
        <Common.Button title="Save" mt={30} width="all" />
      </Common.Block>
    </ScrollView>
  );
}

export default Profile;
