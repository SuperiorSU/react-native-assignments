import { View, Text, SafeAreaView } from 'react-native'
import React, {useState, useEffect}from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [day, setDay] = useState(new Date().toLocaleDateString())
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(interval)
    }, [time,day])
     
  return (
    <SafeAreaView className="p-3 m-2 bg-indigo-500 rounded-2xl">
      <Text className="text-xl text-slate-200 font-semibold">Greetings,</Text>
      <Text className="text-3xl pt-1 text-slate-100 font-bold">Kumar Sujal</Text>
      <View className="my-3 py-7">
   
        <Text className="text-6xl text-center pt-5 text-slate-50 font-bold" >{time}</Text>
        <View className="flex flex-row justify-end">
            <Text className="text-white/75 px-5 text-lg">Current: {day}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Clock