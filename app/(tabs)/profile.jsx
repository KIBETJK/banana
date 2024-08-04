import { View, Text } from 'react-native'
import React from 'react'
import UserInfo from '../../components/Profile/UserInfo'
import MenuList from '../../components/Profile/MenuList'
import { Colors } from '../../constants/Colors'


export default function profile() {
  return (
    <View style={{
      marginTop:30,
      paddingLeft:5,
      paddingRight:5
    }}>
      <Text style={{
          fontFamily:'outfit-bold',
          fontSize:30,
          backgroundColor:Colors.PRIMARY,
          color:'#fff',
          textAlign:'center'
      }}>User Account</Text>
      {/* User Info */}
      <UserInfo/>
      {/* Menu List */}
      <MenuList/>
    </View>
  )
}