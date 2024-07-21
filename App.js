import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import Header from './components/Header';
import Points from './components/Points';
import Login from './components/Login';
import Calculator from './components/Calculator';
import OTP from './components/OTP';
import RegisterForm from './components/RegisterForm';
import Counter from './components/Counter';
import Clock from './components/Clock';
import Stopwatch from './components/Stopwatch';
import NameChange from './components/NameChange';
import TableEg from './components/TableEg';
import ShowMore from './components/ShowMore';
import Sorting from './components/Sorting';
import AccordionEg from './components/AccordionEg';
// import Search from './components/SearchEg';
import SearchEg from './components/SearchEg';
import SideBarEg from './components/SideBarEg';

import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Recent from './pages/Recent';
import Spam from './pages/Spam';
import Offline from './pages/Offline';
import Trash from './pages/Trash';
import Backups from './pages/Backups';
import Settings from './pages/Settings';
import HelpFeed from './pages/HelpFeed';
import Storage from './pages/Storage';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import Icon5 from 'react-native-vector-icons/AntDesign';

// custom drawer
const CustomHeader=(props)=>{
  return(
    <DrawerContentScrollView {...props}>
      <Text className="text-[24px] py-5 border-b-2 border-slate-300 px-4 font-semibold">Google Drive</Text>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}
const Drawer = createDrawerNavigator();
function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props)=><CustomHeader {...props}/>} initialRouteName="Recent">
        <Drawer.Screen options={{
          drawerIcon:()=><Icon name="clock" size={24} />
        }} name="Recent" component={Recent} />
        <Drawer.Screen options={{
          drawerIcon:()=><Icon4 name="check-circle-outline" size={24}/>
        }} name="Offline" component={Offline} />
        <Drawer.Screen options={{
          drawerIcon:()=><Icon3 name="trash-o" size={24} />
        }} name="Trash" component={Trash} />
        <Drawer.Screen options={{
          drawerIcon:()=><Icon5 name="clouduploado" size={24} />
        }} name="Backups" component={Backups} />
        <Drawer.Screen options={{
          drawerIcon:()=><Icon1 name="settings-outline" size={24} />
        }} name="Settings" component={Settings} />
        <Drawer.Screen options={{
          drawerIcon:()=><Icon name="help-circle" size={24} />
        }} name="Help & Feedback" component={HelpFeed} />
        <Drawer.Screen options={{
          drawerIcon:()=><Icon1 name="cloud-outline" size={24}/>
        }} name="Storage" component={Storage} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;


