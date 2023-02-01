import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const PrimeChecker = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    const isNumPrime = isPrime(Number(number));
    setResult(isNumPrime ? `${number} is a prime number` : `${number} is not a prime number`);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter a number"
        keyboardType="numeric"
        onChangeText={text => setNumber(text)}
        value={number}
      />
      <Button title="Check" onPress={handleSubmit} />
      <Text>{result}</Text>
    </View>
  );
};

export default PrimeChecker;
