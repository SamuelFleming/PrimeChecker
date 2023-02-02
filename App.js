import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{ PrimeChecker } from './primeChecker.js';

export default function App() {
  return (
      //UI(),
      PrimeChecker()
  );
}

function UI(){
  return (
      <View style ={stylesUI.container}>
        <Text style={stylesUI.title}>Prime Checker</Text>
      </View>
  );
}

const stylesUI = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'dark blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 12,
    padding: 8,
    borderColor: 'grey',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
});
