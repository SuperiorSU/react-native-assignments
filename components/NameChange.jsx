import React, { useState } from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';

const NameChange = () => {
    const [selectedColor, setSelectedColor] = useState('#000000');

    const colorCodes = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

    const changeColor = (color) => {
        setSelectedColor(color);
    };

    return (
        <SafeAreaView className="flex items-center p-3">
            <View className="w-full h-80 my-auto rounded-lg p-5 bg-slate-200" >
                <Text style={ {color: selectedColor }} className="text-5xl font-bold text-white text-center my-auto">Kumar Sujal</Text>
                <Text style={{color:selectedColor}} className="text-xl text-center text-white">Selected Color: {selectedColor}</Text>
            </View>
            <View className="flex flex-row flex-wrap gap-y-4 justify-center gap-x-5 mt-5">
                {colorCodes.map((color) => (
                    <Pressable
                        key={color}
                        className="p-3 rounded-full "
                        style={{ backgroundColor: color }}
                        onPress={() => changeColor(color)}
                    >
                        <Text className="even:text-black font-medium odd:text-white">{color}</Text>
                    </Pressable>
                ))}
            </View>
        </SafeAreaView>
    );
}

export default NameChange;
