import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
const HelpFeed = () => {
  return (
    <ScrollView className="p-4">
      <Text className="text-[17px] font-semibold">Need more help?</Text>
      <View className="my-3">
        <Pressable className="rounded-lg my-1 bg-blue-200 p-3">
          <View className="flex flex-row gap-x-4">
            <Icon name="chat" size={28} color="blue" />
            <View>
              <Text className=" font-semibold text-lg">Ask the Help Community</Text>
              <Text>Get answers from community experts</Text>
            </View>
          </View>
        </Pressable>
        <Pressable className="rounded-lg my-1 bg-blue-200 p-3">
          <View className="flex flex-row gap-x-4">
            <Icon2 name="disc" size={28} color="blue" />
            <View>
              <Text className=" font-semibold text-lg">Contact us</Text>
              <Text>Tell us more and we'll you get there</Text>
            </View>
          </View>
        </Pressable>

      </View>
      <Pressable>
        <View className="flex flex-row border-y-2 border-slate-200 items-center gap-x-3 py-3">
            <View className="p-3 bg-blue-200 rounded-full">
              <Icon3 name="chat" color="blue" size={28}/>
            </View>
            <View><Text className="text-[17px]">Send feedback</Text></View>
        </View>
      </Pressable>
      <View>
      <Text className="text-[17px] font-semibold my-2">Popular help resources</Text>
        <Pressable className="my-[2px] ">
          <View className="flex flex-row items-center gap-x-3 py-3">
              <View className="p-3 bg-blue-200 rounded-full">
                <Icon name="text-document" color="blue" size={28}/>
              </View>
              <View><Text className="text-[17px]">Recover a deleted file in Google Drive</Text></View>
          </View>
        </Pressable>
        <Pressable className="my-[2px] ">
          <View className="flex flex-row items-center gap-x-3 py-3">
              <View className="p-3 bg-blue-200 rounded-full">
                <Icon name="text-document" color="blue" size={28}/>
              </View>
              <View><Text className="text-[17px]">Manage & restore your mobile backups in Google Drive</Text></View>
          </View>
        </Pressable>
        <Pressable className="my-[2px] ">
          <View className="flex flex-row items-center gap-x-3 py-3">
              <View className="p-3 bg-blue-200 rounded-full">
                <Icon name="text-document" color="blue" size={28}/>
              </View>
              <View><Text className="text-[17px]">How to use Google Drive</Text></View>
          </View>
        </Pressable>
        <Pressable className="my-[2px] ">
          <View className="flex flex-row items-center gap-x-3 py-3">
              <View className="p-3 bg-blue-200 rounded-full">
                <Icon name="text-document" color="blue" size={28}/>
              </View>
              <View><Text className="text-[17px]">Move texts, photos, and videos</Text></View>
          </View>
        </Pressable>
      </View>
      
    </ScrollView>
  )
}

export default HelpFeed