import { View, Text, Image, TouchableOpacity, TextInput, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore';
import{db, storage} from './../../configs/FirebaseConfigs'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useUser } from '@clerk/clerk-expo';
export default function addProduct() {
const navigation=useNavigation();
const [image,setImage]=useState(null);
const [categoryList,setCategoryList]=useState([]);
const {user}=useUser();

const [name,setName]=useState();
const [contact,setContact]=useState();
const [price,setPrice]=useState();
const [quantity,setQuantity]=useState();
const [date,setDate]=useState();
const [email,setEmail]=useState();
const [category,setCategory]=useState();
const [location,setLocation]=useState();
const [loading,setLoading]=useState(false);
useEffect(()=>{
navigation.setOptions({
    headerTitle:'Add New Product',
    headerShown:true,
    headerStyle:{
      backgroundColor:Colors.PRIMARY
    }
})
GetCategoryList();
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
    const GetCategoryList=async()=>{
      setCategoryList([])
      const q=query(collection(db,'Category'));
      const snapShot=await getDocs(q);
      snapShot.forEach((doc)=>{
        console.log(doc.data());
        setCategoryList(prev=>[...prev,{
          label:(doc.data()).name,
          value:(doc.data()).name
        }])
      })
    }
    const onAddNewProduct=async()=>{
      setLoading(true);
      const fileName=Date.now().toString()+".jpg";
      const response=await fetch(image);
      const blob=await response.blob();
      const imageRef=ref(storage,'bananahub/'+fileName);
      uploadBytes(imageRef,blob).then((snapshot)=>{
        console.log("File Uploaded!!!")
      }).then(response=>{
        getDownloadURL(imageRef).then(async(downloadUrl)=>{
          console.log(downloadUrl);
          saveProductDetails(downloadUrl)
        })
      })
      setLoading(false);
    }
    const saveProductDetails=async(imageUrl)=>{
      await setDoc(doc(db,'BusinessList',Date.now().toString()),{
        name:user?.fullName,
        email:user?.primaryEmailAddress?.emailAddress,
        price:price,
        quantity:quantity,
        date:date,
        contact:contact,
        location:location,
        category:category,
        imageUrl:imageUrl
      })
      setLoading(false);
      ToastAndroid.show('New Product Added!',ToastAndroid.LONG)
    }
  return (
    <View style={{
      paddingLeft:5,
      paddingRight:5
    }}>
      <View style={{
        backgroundColor:Colors.PRIMARY
      }}>
      
      <Text style={{
        fontFamily:'outfit-bold',
      fontSize:25,
      textAlign:'center'  
      }}>Add Product</Text>
      <Text style={{
        fontFamily:'outfit-medium',
        textAlign:'center',
        fontSize:18
      }}>Fill all details in order to add your new product</Text>
      </View>
      
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
        fontSize:18
      }}>Add Product Image Here</Text>
      </TouchableOpacity>
      <View style={{
        alignItems:'center'
      }}>
        {/* <TextInput placeholder='Farmer Name'
        // onChange={(v)=>setName(v)}
        onChangeText={(text) => setName(text)}
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
        /> */}
        {/* <TextInput placeholder='Banana Type'
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
        /> */}
        <View style={{
          width:300,
          borderWidth:1,
          borderRadius:5,
          backgroundColor:'#fff',
          marginTop:10,
          borderColor:Colors.PRIMARY,
          
        }}>
         <RNPickerSelect
      onValueChange={(value) => setCategory(value)}
      items={categoryList}
    />
    </View>
        <TextInput placeholder='Quantity'
        // onChange={(v)=>setQuantity(v)}
        onChangeText={(text) => setQuantity(text)}
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
        // onChange={(v)=>setPrice(v)}
        onChangeText={(text) => setPrice(text)}
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
        // onChange={(v)=>setDate(v)}
        onChangeText={(text) => setDate(text)}
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
        // onChange={(v)=>setLocation(v)}
        onChangeText={(text) => setLocation(text)}
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
        // onChange={(v)=>setContact(v)}
        onChangeText={(text) => setContact(text)}
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
        {/* <TextInput placeholder='Email'
        // onChange={(v)=>setEmail(v)}
        onChangeText={(text) => setEmail(text)}
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
        /> */}
      </View>
      <View style={{
        alignItems:'center'
      }}>
      <TouchableOpacity 
      disabled={loading} 
      style={{
        
        width:200,
      padding:15,
      backgroundColor:Colors.PRIMARY,
      borderRadius:5,
      marginTop:20
     }}
     onPress={()=>onAddNewProduct()}
     >
      {loading?
      <ActivityIndicator size={'large'} color={'#8E4601'}/>:
      <Text style={{
         textAlign:'center',
         fontFamily:'outfit-medium',
         color:'#fff'
      }}>Add New Product</Text>}
     </TouchableOpacity>
     </View>
    </View>
  )
}