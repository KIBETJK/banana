import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
export default function addProduct() {
const navigation=useNavigation();
const [image,setImage]=useState(null);
useEffect(()=>{
navigation.setOptions({
    headerTitle:'Add New Product',
    headerShown:true,
})
},[])
    const onImagePick=async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
           
            quality: 1,
          });
          setImage(result?.assets[0].uri);
          console.log(result);
    }
  return (
    <View>
      <Text style={{
        fontFamily:'outfit-bold',
      fontSize:25  
      }}>Add Product</Text>
      <Text style={{
        fontFamily:'outfit',
        color:Colors.GRAY
      }}>Fill all details in order to add a new product</Text>
      <TouchableOpacity style={{
        marginTop:20,
        alignItems:'center'
      }}
      onPress={()=>onImagePick()}
      >
      {!image? <Image source={require('./../../assets/images/placeholder.png')}
      style={{
        width:100,
        height:100
      }}
      />
      :
      <Image source={{uri:image}}
      style={{
        width:100,
        height:100,
        borderRadius:15
      }}
  
      />}
      <Text style={{
        color:Colors.GRAY,
        fontFamily:'outfit',
        fontSize:10
      }}>Add Image</Text>
      </TouchableOpacity>
      <View style={{
        alignItems:'center'
      }}>
        <TextInput placeholder='Farmer Name'
        style={{
            width:300,
            padding:5,
            borderWidth:1,
            borderRadius:5,
            fontSize:17,
            backgroundColor:'#fff',
            marginTop:10,
            borderColor:Colors.PRIMARY,
            fontFamily:'outfit'
        }}
        />
        <TextInput placeholder='Banana Type'
        style={{
            width:300,
            padding:5,
            borderWidth:1,
            borderRadius:5,
            fontSize:17,
            backgroundColor:'#fff',
            marginTop:10,
            borderColor:Colors.PRIMARY,
            fontFamily:'outfit'
        }}
        />
        <TextInput placeholder='Quantity'
        style={{
            width:300,
            padding:5,
            borderWidth:1,
            borderRadius:5,
            fontSize:17,
            backgroundColor:'#fff',
            marginTop:10,
            borderColor:Colors.PRIMARY,
            fontFamily:'outfit'
        }}
        />
        <TextInput placeholder='Asking Price'
        style={{
            width:300,
            padding:5,
            borderWidth:1,
            borderRadius:5,
            fontSize:17,
            backgroundColor:'#fff',
            marginTop:10,
            borderColor:Colors.PRIMARY,
            fontFamily:'outfit'
        }}
        />
        <TextInput placeholder='Estimated Date of Harvest'
        style={{
            width:300,
            padding:5,
            borderWidth:1,
            borderRadius:5,
            fontSize:17,
            backgroundColor:'#fff',
            marginTop:10,
            borderColor:Colors.PRIMARY,
            fontFamily:'outfit'
        }}
        />
        <TextInput placeholder='Location/Ward'
        style={{
            width:300,
            padding:5,
            borderWidth:1,
            borderRadius:5,
            fontSize:17,
            backgroundColor:'#fff',
            marginTop:10,
            borderColor:Colors.PRIMARY,
            fontFamily:'outfit'
        }}
        />
        <TextInput placeholder='Contact'
        style={{
            width:300,
            padding:5,
            borderWidth:1,
            borderRadius:5,
            fontSize:17,
            backgroundColor:'#fff',
            marginTop:10,
            borderColor:Colors.PRIMARY,
            fontFamily:'outfit'
        }}
        />
        <TextInput placeholder='Email'
        style={{
            width:300,
            padding:5,
            borderWidth:1,
            borderRadius:5,
            fontSize:17,
            backgroundColor:'#fff',
            marginTop:10,
            borderColor:Colors.PRIMARY,
            fontFamily:'outfit'
        }}
        />
      </View>
      <View style={{
        alignItems:'center'
      }}>
      <TouchableOpacity style={{
        
        width:200,
      padding:15,
      backgroundColor:Colors.PRIMARY,
      borderRadius:5,
      marginTop:20
     }}>
      <Text style={{
         textAlign:'center',
         fontFamily:'outfit-medium',
         color:'#fff'
      }}>Add New Product</Text>
     </TouchableOpacity>
     </View>
    </View>
  )
}