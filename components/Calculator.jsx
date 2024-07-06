import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(0);

  const handleInput = (value) => {
    setInput(input + value);
  }

  const handleOperator = (value) => {
    setExpression(expression + input + value);
    setInput("");
  }

  const handleResult = () => {
    setExpression(expression + input);
    setInput("");
    setResult(eval(expression + input));
  }

  const handleClear = () => {
    setInput("");
    setExpression("");
    setResult(0);
  }

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  }

  return (
    <View>
      <View className="bg-pink-100 p-5 rounded-b-3xl h-60 mb-4">
        <View className="flex justify-end items-end my-auto">
          <TextInput 
            className="text-6xl font-semibold text-right" 
            placeholder="0" 
            value={input} 
            editable={true} 
          />
        </View>
      </View>
      
      <View className="flex flex-row justify-center items-center p-2 gap-x-2">
        <Pressable className="p-2 rounded-full w-20 h-20 bg-yellow-200" onPress={handleClear}>
          <Text className="text-center text-2xl my-auto">AC</Text>
        </Pressable>
        <View className="p-2 rounded-full w-20 h-20 bg-pink-200">
          <Text className="text-center font-medium text-2xl my-auto">( )</Text>
        </View>
        <View className="p-2 rounded-full w-20 h-20 bg-pink-200">
          <Text className="text-center font-medium text-2xl my-auto">%</Text>
        </View>
        <Pressable className="p-2 rounded-full w-20 h-20 bg-pink-200" onPress={() => handleOperator("/")}>
          <Text className="text-center font-medium text-2xl my-auto">/</Text>
        </Pressable>
      </View>
      
      {/* Rest of the code */}
      
      <View className="bg-pink-100 p-5 rounded-b-3xl h-60 mt-4">
        <View className="flex justify-end items-end my-auto">
          <TextInput 
            className="text-6xl font-semibold text-right" 
            placeholder="Result" 
            value={result.toString()} 
            editable={false} 
          />
        </View>
      </View>
    </View>
  );
};

export default Calculator;
