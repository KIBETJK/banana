import { View, Text, FlatList } from 'react-native'
import React from 'react'
import BusinessListCard from './BusinessListCard'
import { ScrollView } from 'react-native-virtualized-view'

export default function ExploreBusinessList({businessList}) {
  return (
    <ScrollView>
     <FlatList
     data={businessList}
     scrollEnabled
     renderItem={({item,index})=>(
       <BusinessListCard 
       key={index}
       business={item}
       />
     )}
     />
     <View style={{
        height:200
     }}>

     </View>
    </ScrollView>
  )
}

