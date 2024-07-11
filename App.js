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
function App() {
  return (
    <View className="">
      {/* <ScrollView> */}
        {/* <Calculator/> */}
        {/* <OTP/> */}
        {/* <RegisterForm/> */}
        {/* <Counter/> */}
        {/* <Clock/> */}
        {/* <Stopwatch/> */}
        {/* <NameChange/> */}
        {/* <TableEg/> */}
        {/* <ShowMore/> */}
        {/* <Sorting/> */}
        {/* <AccordionEg title="Accordion 1" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl "/> */}
        {/* <SearchEg/> */}
        {/* <Login/> */}
        <SideBarEg/>
      {/* </ScrollView> */}
    </View>
  );
}

export default App;
