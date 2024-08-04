import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

export default function BusinessListCard({business}) {
    const router=useRouter();
  return (
    <TouchableOpacity style={{
        padding:10,
        margin:10,
        borderRadius:15,
        backgroundColor:Colors.Iconbg,
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    }}
    onPress={()=>router.push('/businessdetail/'+business.id)}
    >
      <Image source={{uri:business.imageUrl}}
      style={{
        width:120,
        height:120,
        borderRadius:15
      }}
      />
      <View style={{
        flex:1,
        gap:7
      }}>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20
        }}>{business.name}</Text>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:15
        }}>{business.contact}</Text>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            gap:5
        }}>
            <Image source={require('./../../assets/images/money.png')}
            style={{
                width:20,
                height:20
            }}
            />
            <Text style={{
            fontFamily:'outfit-medium',
            fontSize:18,
            marginTop:3
        }}>{business.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}