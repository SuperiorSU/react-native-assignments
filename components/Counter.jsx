import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <View>
      <Text className="text-2xl font-bold text-center py-5 uppercase">
        COUNTER
      </Text>
      <View className="flex flex-col gap-y-7 justify-center p-2 rounded-xl mt-6 border-blue-500 border-t-2 border-b-2 border-r-[1px] border-l-[1px] mx-auto w-[95%] border-r-slate-400 border-l-slate-400">
        <View>
          <View className="mx-auto">
            <Text className="text-9xl font-bold text-purple-700">{count}</Text>
          </View>
        </View>
        <View>
          <View className="flex flex-row justify-around gap-x-3">
            <View>
              <Pressable
                onPress={decrement}
                className="w-20 h-20 bg-blue-200 rounded-full">
                <Text className="text-3xl text-center my-auto">-</Text>
              </Pressable>
            </View>
            <View>
              <Pressable
                onPress={increment}
                className="w-20 h-20 bg-blue-200 rounded-full">
                <Text className="text-3xl text-center my-auto">+</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Counter;
