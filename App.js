import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './components/Header';
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
function App() {
  return (
    <View className="">
        {/* <Calculator/> */}
        {/* <OTP/> */}
        {/* <RegisterForm/> */}
        {/* <Counter/> */}
        {/* <Clock/> */}
        {/* <Stopwatch/> */}
        {/* <NameChange/> */}
        {/* <TableEg/> */}
        {/* <ShowMore/> */}
        <Sorting/>
    </View>
  );
}
const styles = StyleSheet.create({
  abs:{
    position:'absolute',
    top:120,
    left:0,
    right:0,
    justifyContent:'center',
    alignItems:'center',
  }
})
export default App;
