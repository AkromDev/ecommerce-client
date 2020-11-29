import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function FormButton({title}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    height: 50,
    borderRadius: 15,
    marginTop: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
});
