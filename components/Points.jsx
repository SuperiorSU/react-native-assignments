import { View, Text } from 'react-native'
import React from 'react'

const Points = (props) => {
   
    const points = props.points
  return (
    <View style={{padding:12}}>
        {
            points.map((point, index) => {
                return (<Text key={index} style={{color:"3c3e40",fontWeight:'medium',paddingVertical:1}}>{point}</Text>)
            })
        }
    </View>
  )
}

export default Points