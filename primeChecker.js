import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export function PrimeChecker() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    const isNumPrime = isPrime(Number(number));
    setResult(isNumPrime ? `${number} is a prime number` : `${number} is not a prime number`);
  };

  return (
    <View style ={stylesUI.container}>
      <Text style={stylesUI.title}>Prime Checker</Text>
      
      <TextInput
        placeholder="Enter a number"
        keyboardType="numeric"
        onChangeText={text => setNumber(text)}
        value={number}
        style={{
          height: 30,
          padding: 5,
          borderBottomColor: 'grey',
          borderBottomWidth: 2,
          marginBottom: 50,
        }}
      />
      <Button 
        title="Check" 
        onPress={handleSubmit} 
        style={{
          color: 'black',
          height: 30
          
        }}
      />
      <Text>{result}</Text>
    </View>
    
    
  );
};

const stylesUI = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#2596be',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    marginTop: 40,
    marginBottom: 70,
    padding: 25,
    borderColor: 'grey',
    borderWidth: 2,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontweight: 'bold',
  },
  input:{

  },
  button: {

  },
});


