import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Colors} from './../../constants/Colors'
import { useRouter } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'
export default function MenuList() {
   const {signOut}=useAuth();
    const menuList=[{
       id:1,
       name:'Add Product',
       icon:require('./../../assets/images/add.png'),
       path:'/product/addProduct'
    },
    {
        id:2,
        name:'My Products',
        icon:require('./../../assets/images/myBusiness.png'),
        path:''
     },
     {
        id:3,
        name:'Share App',
        icon:require('./../../assets/images/share.png'),
        path:''
     },
     {
        id:4,
        name:'Logout',
        icon:require('./../../assets/images/logout.png'),
        path:'logout'
     }
]
const router=useRouter();
const onMenuClick=(item)=>{
   if(item.path=='logout')
      {
         signOut();
         return ;
      }
   router.push(item.path)
}

  return (
    <View style={{
      marginTop:50
    }}>
     <FlatList
     data={menuList}
     numColumns={2}
     renderItem={({item,index})=>(
        <TouchableOpacity 
        onPress={()=>onMenuClick(item)}
        style={{
         display:'flex',
         flexDirection:'row',
         alignItems:'center',
         gap:10,
         flex:1,
         padding:10,
         borderRadius:15,
         borderWidth:1,
         margin:10,
         backgroundColor:Colors.Iconbg,
         borderColor:Colors.PRIMARY
        }}>
            <Image source={item.icon}
            style={{
                width:50,
                height:50
            }}
            />
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:14,
                flex:1
            }}>{item.name}</Text>
        </TouchableOpacity>
     )}
     /> 
    </View>
  )
}