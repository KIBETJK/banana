import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-expo'
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import {db} from './../../configs/FirebaseConfigs'
import BusinessListCard from '../../components/Explore/BusinessListCard'
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';

export default function MyProduct() {

const {user}=useUser();
const[businessList,setBusinessList]=useState([]);
const [loading,setLoading]=useState(false);
const navigation=useNavigation();
useEffect(()=>{
  navigation.setOptions({
    headerShown:true,
    headerTitle:'My Products',
    headerStyle:{
      backgroundColor:Colors.PRIMARY
    }
  })
user&&GetUserProducts()
},[user])

  const GetUserProducts=async()=>{
    setLoading(true);
    setBusinessList([])
    const q=query(collection(db,'BusinessList'),where('email','==',user?.primaryEmailAddress?.emailAddress));
     const querySnapshot=await getDocs(q);
     querySnapshot.forEach((doc)=>{
      console.log(doc.data());
      setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
     })
     setLoading(false);
  }
  return (
    <View style={{
      padding:20
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30
      }}>My Products</Text>

<FlatList
data={businessList}
onRefresh={GetUserProducts}
refreshing={loading}
renderItem={({item,index})=>(
  <BusinessListCard business={item}
  key={index}
  />
)}

/>

    </View>
  )
}