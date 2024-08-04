import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Category from '../../components/Home/Category'
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfigs';
import ExploreBusinessList from '../../components/Explore/ExploreBusinessList';
export default function explore() {

const [businessList,setBusinessList]=useState([]);
  const getBusinessByCategory=async(category)=>{
    setBusinessList([]);
    const q=query(collection(db,'BusinessList'),where('category','==',category))
    const querySnapshot=await getDocs(q);
    querySnapshot.forEach((doc)=>{
      console.log(doc.data())
      setBusinessList(prev=>[...prev,{id:doc.id, ...doc.data()}])
    })
  }
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
      }}>Explore More</Text>
     {/* Search Bar */}
     <View style={{
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        backgroundColor:'#fff',
        padding:10,
        marginVertical:10,
        marginTop:15,
        borderRadius:8,
        borderWidth:1,
        borderColor:Colors.PRIMARY
     }}>
     <Ionicons name="search" size={24} color={Colors.PRIMARY} />
     <TextInput placeholder='Search' style={{
        fontFamily:'outfit',
        fontSize:16
     }}/>
     </View>
     {/* Category */}
     <Category
     explore={true}
     onCategorySelect={(category)=>getBusinessByCategory(category)}
     />
     {/* Products List */}
     <ExploreBusinessList businessList={businessList}/>
    </View>
  )
}