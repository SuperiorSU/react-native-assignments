import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/MaterialIcons';

const SideBarEg = () => {
  const menuItems = [
    { icon: "inbox", text: "Inbox", component: Icon },
    { icon: "star", text: "Starred", component: Icon },
    { icon: "clock", text: "Snoozed", component: Icon },
    { icon: "send", text: "Sent", component: Icon1 },
    { icon: "label-important-outline", text: "Important", component: Icon4 },
    { icon: "file", text: "Drafts", component: Icon },
    { icon: "arrow-down", text: "More", component: Icon },
    { icon: "chatbox-ellipses-outline", text: "Chats", component: Icon1 },
    { icon: "send-clock-outline", text: "Scheduled", component: Icon2 },
    { icon: "email-multiple-outline", text: "All Mail", component: Icon2 },
    { icon: "trash-o", text: "Spam", component: Icon3 },
    { icon: "alert-octagon-outline", text: "Bin", component: Icon2 },
    { icon: "label-important-outline", text: "Categories", component: Icon4 },
    { icon: "users", text: "Contacts", component: Icon },
    { icon: "alert-circle-outline", text: "Notifications", component: Icon2 },
    { icon: "tag", text: "Tags", component: Icon },
    { icon: "forum-outline", text: "Forums", component: Icon2 },
    { icon: "settings-outline", text: "Settings", component: Icon1 },
  ];

  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible);
  };
  const [selected, setSelected] = useState('Inbox');

  return (
    <ScrollView className="bg-white shadow-md ">
      <View className="p-2 flex flex-row justify-between items-center sticky top-0">
        <View className="flex flex-row gap-x-4 items-center">
          <Pressable onPress={handleVisible} className={`rounded-full p-1 ${visible?'bg-slate-200':''}`}>
            <Icon1 name="menu-sharp" size={30} />
          </Pressable>
          <View>
            <View className="flex flex-row items-center">
              <Image source={require('../assets/gmail.png')} className="h-12 w-12 object-center" />
              <Text className="text-xl font-medium">GMAIL</Text>
            </View>
          </View>
        </View>
        <View></View>
      </View>
      
      {visible && (
        <View className="">
          <View className="bg-white p-3 px-4 w-[80%] border-r-[1px] border-t-[1px] border-slate-200">
          {menuItems.map((item, index) => {
            const IconComponent = item.component;
            return (
              <Pressable key={index} onPress={() => setSelected(item.text)}>
                <View className={`p-2 flex flex-row gap-x-3 items-center ${selected === item.text ? 'rounded-full bg-blue-200' : ''}`}>

                  <IconComponent className={`text-lg ${selected===item.text ? 'text-black font-medium':''}`} name={item.icon} size={24} />
                  <Text className={`text-lg ${selected===item.text ? 'text-black font-medium':''}`}>{item.text}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>
        </View>
        
      )}
    </ScrollView>
  );
};

export default SideBarEg;
