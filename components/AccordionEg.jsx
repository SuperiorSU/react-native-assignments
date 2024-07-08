import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';

const AccordionEg = props => {
  const title = props.title;
  const body = props.body;
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <View className="m-2">
      <Pressable onPress={handleVisible}>
        <View
          className={`text-lg p-3 accordBody bg-slate-300 rounded-md flex flex-row justify-between ${
            visible ? `border-2 border-blue-400` : `border-0`
          }`}>
          <View>
            <Text className="text-black">{title}</Text>
          </View>
          <View>
            <Text className="text-black font-bold">{visible ? '-' : '+'}</Text>
          </View>
        </View>
      </Pressable>
      {visible && (
        <View className="p-3 bg-slate-200 rounded-b-md">
          <Text className="text-black">{body}</Text>
        </View>
      )}
    </View>
  );
};

export default AccordionEg;
