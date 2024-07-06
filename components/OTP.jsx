import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const OTP = () => {
    const [otp, setOtp] = useState([]);
    let otpArray = [];
    const generateHandle = () => {
        for (let i = 0; i < 5; i++) {
            otpArray.push(Math.floor(Math.random() * 10));
        }
        setOtp(otpArray);
    }
  return (
    <View className="">
      <Text className="text-center py-5 text-3xl font-extrabold">
        OTP BOX
      </Text>
      <View className="py-16 rounded-md w-[95%] mx-auto my-auto border-[1px] border-slate-500 ">
        <View className="flex flex-row justify-between gap-x-1 p-4 my-auto">
            <View className="border-[1px] border-slate-400 p-1 w-[60px] h-[60px]">
                <Text className="text-center text-xl font-bold my-auto">{otp[0]}</Text>
            </View>
            <View className="border-[1px] border-slate-400 p-1 w-[60px] h-[60px]">
            <Text className="text-center text-xl font-bold my-auto">{otp[1]}</Text>
            </View>
            <View className="border-[1px] border-slate-400 p-1 w-[60px] h-[60px]">
            <Text className="text-center text-xl font-bold my-auto">{otp[2]}</Text>
            </View>
            <View className="border-[1px] border-slate-400 p-1 w-[60px] h-[60px]">
            <Text className="text-center text-xl font-bold my-auto">{otp[3]}</Text>
            </View>
            <View className="border-[1px] border-slate-400 p-1 w-[60px] h-[60px]">
            <Text className="text-center text-xl font-bold my-auto">{otp[4]}</Text>
            </View>
        </View>
      </View>
        <View className="px-7 py-10">
            <Button title='Generate OTP' onPress={generateHandle}/>
        </View>
    </View>
  )
}

export default OTP