import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

const Sorting = () => {
  const [numbers, setNumbers] = useState(['', '', '']);
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [visible, setVisible] = useState(false);

  const onChangeHandler = (text, index) => {
    const newNumbers = [...numbers];
    newNumbers[index] = text;
    setNumbers(newNumbers);
  }

  const handleSort = () => {
    if (numbers.some(number => number === '')) {
      alert('Please enter all numbers');
      return;
    }

    if (numbers.some(number => isNaN(number))) {
      alert('Please enter only numbers');
      return;
    }

    const numericNumbers = numbers.map(Number);
    setSortedNumbers(numericNumbers.sort((a, b) => a - b));
    setVisible(true);
  }

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        style={{ padding: 8, marginVertical: 8, borderWidth: 1, borderRadius: 8 }}
        placeholder='Enter 1st number'
        keyboardType='numeric'
        onChangeText={(text) => onChangeHandler(text, 0)}
        value={numbers[0]}
      />
      <TextInput
        style={{ padding: 8, marginVertical: 8, borderWidth: 1, borderRadius: 8 }}
        placeholder='Enter 2nd number'
        keyboardType='numeric'
        onChangeText={(text) => onChangeHandler(text, 1)}
        value={numbers[1]}
      />
      <TextInput
        style={{ padding: 8, marginVertical: 8, borderWidth: 1, borderRadius: 8 }}
        placeholder='Enter 3rd number'
        keyboardType='numeric'
        onChangeText={(text) => onChangeHandler(text, 2)}
        value={numbers[2]}
      />

      <Pressable
        style={{ padding: 12, backgroundColor: '#4A90E2', borderRadius: 24, width: 112, alignSelf: 'center' }}
        onPress={handleSort}
      >
        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>
          Sort
        </Text>
      </Pressable>

      {visible && (
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, marginTop: 32 }}>
          {sortedNumbers.map((number, index) => (
            <View key={index} style={{ borderWidth: 1, padding: 8 }}>
              <Text style={{fontSize: 30}}>{number}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  )
}

export default Sorting
