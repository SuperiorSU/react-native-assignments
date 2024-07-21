import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <ScrollView className="p-4">
      <View className=" mb-7">
        <Text className="text-blue-400 font-semibold py-1 text-[18px]">Storage</Text>
        <Text className="font-semibold text-[22px]">4.76 GB of 15 GB used</Text>
        <Pressable className="bg-blue-400 mt-3 rounded-full py-3 px-4 w-[162px]">
        <View className="flex flex-row">
          <Text className="text-[17px] text-blue-800 font-semibold">Upgrade Storage</Text>
        </View>
        </Pressable>
      </View>
      <View className="mb-7">
        <Text className="text-blue-400 font-semibold py-1 text-[18px]">Auto backups for apps</Text>
        <Text className="font-semibold text-[22px] mt-3">Backup and reset</Text>
        <Text className="">Backup settings for your device</Text>
      </View>
      <View className="mb-7">
        <Text className="text-blue-400 font-semibold py-1 text-[18px]">Notifications</Text>
        <Pressable>
          <Text className="font-semibold text-[22px] mt-3">Notification settings</Text>
        </Pressable>
      </View>
      <View className="mb-7">
        <Pressable>
          <Text className="text-blue-400 font-semibold py-1 text-[18px]">Theme</Text>
          <Text className="font-semibold text-[22px] mt-3">Choose theme</Text>
          <Text className="">System default</Text>
        </Pressable>   
      </View>
      <View className="mb-7">
        <Text className="text-blue-400 font-semibold py-1 text-[18px]">Documents cache</Text>
        <Pressable>
          <Text className="font-semibold text-[22px] mt-3">Clear Cache</Text>
          <Text className="">Remove all cached documents</Text>
        </Pressable>
        <Pressable>
          <Text className="font-semibold text-[22px] mt-3">Cache Size</Text>
          <Text className="">Cache size is set to 250 MB</Text>
        </Pressable>
      </View>
      <View className="mb-7">
        <Text className="text-blue-400 font-semibold py-1 text-[18px]">data usage</Text>
        <Pressable>
          <Text className="font-semibold text-[22px] mt-3">Transer files only over Wi-Fi</Text>
          <Text className="">Uploading and updating of files will pause when W-Fi connection isn't available</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default Settings