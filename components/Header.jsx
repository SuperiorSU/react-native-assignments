import { Text, View } from 'react-native'
import React from 'react'

const Header = (props) => {
    const text = props.text
  return (
    <View style={{paddingVertical:4,marginTop:8, paddingHorizontal:8, backgroundColor:"#bcbec0"}}>
        <Text style={{fontWeight:"bold", color:'black',fontSize:16}}>{text}</Text>
    </View>
  )
}

export default Header

