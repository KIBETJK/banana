import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { collection, doc, getDoc, where } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfigs';
import {query} from 'firebase/database';
import { Colors } from '../../constants/Colors';
import Intro from '../../components/BusinessDetail/Intro';
import ActionButton from '../../components/BusinessDetail/ActionButton';
import About from '../../components/BusinessDetail/About';


export default function BusinessDetail() {
    const{businessid}=useLocalSearchParams();
    const [business,setBusiness]=useState();
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
GetBusinessDetailById();
    },[])
    const GetBusinessDetailById=async()=>{
    setLoading(true);
    const docRef=doc(db,'BusinessList',businessid);
    const docSnap=await getDoc(docRef);
    if (docSnap.exists()){
        setBusiness(docSnap.data());
        setLoading(false)
    } else{
        console.log("No such document!");
    }
    
    }
  return (
    <View>
        {
            loading?
            <ActivityIndicator 
            style={{
                marginTop:'70%'
            }}
            size={'large'}
            color={Colors.Iconbg}
            />:
                <View>
        {/* Intro Section */}
        <Intro business={business}/>
        {/* Action Buttons */}
        <ActionButton business={business}/>
        {/* Extra Details section */}
        <About business={business}/>
                </View>
        }
    </View>
  )
}