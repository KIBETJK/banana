import { View, Text, Image, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfigs';
import { useUser } from '@clerk/clerk-expo';

export default function Intro({business}) {
    const router=useRouter();

    const {user}=useUser();
const onDelete=()=>{
  Alert.alert('Do you want to Delete ?','Do you really want to Delete this Product?',[
{
 text:'Cancel',
 style:'cancel'
},
{
  text:'Delete',
  style:'destructive',
  onPress:()=>deleteProduct()
}

  ])
}
// const deleteProduct=async()=>{
//   console.log("Delete Product");
//   await deleteDoc(doc(db,'BusinessList',business?.id));
//    router.back();
//    ToastAndroid.show('Product Deleted!',ToastAndroid.LONG)
// }
const deleteProduct = async () => {
  console.log("Delete Product");
  try {
    await deleteDoc(doc(db, 'BusinessList', business?.id));
    ToastAndroid.show('Product Deleted!', ToastAndroid.LONG);
    setTimeout(() => {
      router.back();
    }, 500); // Adjust the delay as needed
  } catch (error) {
    console.error("Error deleting document: ", error);
    Alert.alert("Error", "Failed to delete the product. Please try again.");
  }
};
  return (
    <View>
        <View style={{
            position:'absolute',
            zIndex:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            width:'100%',
            padding:30
        }}>
        <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={40} color="black" />
        </View>
      <Image source={{uri:business?.imageUrl}}
      style={{
        width:'100%',
        height:340,
        backgroundColor:Colors.GRAY
      }}
      />

      <View style={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      padding:20,
        marginTop:-20,
        backgroundColor:'#fff',
        borderTopLeftRadius:25,
        borderTopRightRadius:25
    }}>
      <View style={{
        padding:20,
        marginTop:-20,
        backgroundColor:'#fff',
        borderTopLeftRadius:25,
        borderTopRightRadius:25
      }}>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:25,
        }}>{business?.name}
        
        </Text>
       <Text style={{
            fontFamily:'outfit-medium',
            fontSize:18
        }}>Kshs {business?.price}</Text>
         
      </View>
      {user?.primaryEmailAddress?.emailAddress==business?.email&&
      <TouchableOpacity onPress={()=>onDelete()}>
      <Ionicons name="trash" size={24} color="red" />
      </TouchableOpacity>}
    </View>
    </View>
  )
}