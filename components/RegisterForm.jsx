import {View, Text, TextInput, Button, ScrollView} from 'react-native';
import React from 'react';

const RegisterForm = () => {
  return (
    <ScrollView>
      <View className="p-1">
        <Text className="text-2xl font-bold text-center py-5 uppercase">
          Registeration Form
        </Text>
        <View className="flex flex-col gap-y-7 justify-center p-2 rounded-xl mt-6 border-blue-500 border-t-2 border-b-2 border-r-[1px] border-l-[1px] border-r-slate-400 border-l-slate-400">
          <View>
            <View className="flex flex-row gap-x-3">
              <TextInput
                className="border-[1px] border-slate-400 w-44 p-2 rounded-md"
                placeholder="First Name"
              />
              <TextInput
                className="border-[1px] border-slate-400 p-2 w-44 rounded-md"
                placeholder="Last Name"
              />
            </View>
          </View>
          <View>
            <Text className="text-blue-500">Email Address</Text>
            <TextInput
              className="border-[1px] border-slate-400 p-2 mt-1 rounded-md"
              placeholder="eg. abc@gmail.com"
            />
          </View>
          <View>
            <Text className="text-blue-500">State</Text>
            <TextInput
              className="border-[1px] border-slate-400 p-2 mt-1 rounded-md"
              placeholder="eg. Chandigarh"
            />
          </View>
          <View>
            <Text className="text-blue-500">Address</Text>
            <TextInput
              className="border-[1px] border-slate-400 p-2 mt-1 rounded-md"
              placeholder="eg. A105-street no.1 Near sky-scrapper"
            />
          </View>
          <View>
            <View className="flex flex-row gap-x-3">
              <TextInput
                className="border-[1px] border-slate-400 w-44 p-2 rounded-md"
                placeholder="District"
              />
              <TextInput
                className="border-[1px] border-slate-400 p-2 w-44 rounded-md"
                placeholder="Pin Code"
              />
            </View>
          </View>
          <View className="pb-6">
            <Text className="text-blue-500">Contact Info</Text>
            <TextInput
              className="border-[1px] border-slate-400 p-2 mt-1 rounded-md"
              placeholder="eg. 123 456 7890"
            />
          </View>
        </View>
        <View className="my-5 px-3">
          <Button title="Submit" />
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterForm;
