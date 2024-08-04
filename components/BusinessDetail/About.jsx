import { View, Text } from 'react-native'
import React from 'react'
import {Colors} from './../../constants/Colors'

export default function About({business}) {
  return (
    <View style={{
        padding:20,
        backgroundColor:'#fff'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20,
        color:Colors.GRAY
      }}>Details</Text>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:18
      }}>Quantity: <Text style={{
        fontFamily:'outfit-bold',
        fontSize:18,
        color:Colors.Iconbg
      }}>{business?.quantity}</Text></Text>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:18
      }}>Estimated Date of Harvest: <Text style={{
        fontFamily:'outfit-bold',
        fontSize:18,
        color:Colors.Iconbg
      }}>{business?.date}</Text></Text>
    </View>
  )
}