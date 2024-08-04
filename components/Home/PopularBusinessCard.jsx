import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

export default function PopularBusinessCard({business}) {
  const router=useRouter();
  return (
    <TouchableOpacity 
    onPress={()=>router.push("/businessdetail/"+business?.id)}
    style={{
        marginLeft:15,
        marginRight:10,
        padding:5,
        backgroundColor:Colors.Iconbg,
        borderRadius:15
    }}>
      <Image source={{uri:business?.imageUrl}}
      style={{
        width:150,
        height:120,
        borderRadius:15
      }}
      />
      <View style={{
        gap:3
      }}>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:17,
            marginTop:3
        }}>{business.name}</Text>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:15,
            marginTop:3
        }}>{business.contact}</Text>
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        }}>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            gap:5
        }}>
            {/* <Image source={require('./../../assets/images/money.png')}
            style={{
                width:20,
                height:20
            }}
            /> */}
            <Text style={{
            fontFamily:'outfit-medium',
            fontSize:18,
            marginTop:3
        }}>Ksh {business.price}</Text>
        </View>
        <Text style={{
            fontFamily:'outfit-medium',
            color:Colors.Iconbg,
            backgroundColor:Colors.GRAY,
            fontSize:20,
            padding:3,
            borderRadius:5
        }}>{business.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}