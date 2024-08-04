import { View, Text, FlatList, Image, TouchableOpacity, Linking, Share } from 'react-native'
import React from 'react'

export default function ActionButton({business}) {
    if (!business) {
        console.log('No business data available');
        return <Text>Loading...</Text>; // Or return nothing if you don't want any UI until business is available
    }
    console.log('Business Object:', business);
    const actionButtonMenu=[
{
id:1,
name:'Call',
icon:require('./../../assets/images/call.png'),
url:'tel:'+business.contact
},
{
    id:2,
    name:'Location',
    icon:require('./../../assets/images/location.png'),
    url:'https://www.google.com/maps/search/?api=1&query='+business?.location
    },
    {
        id:3,
        name:'Email',
        icon:require('./../../assets/images/mail.png'),
        url:'mailto:'+business?.email
        },
        {
            id:4,
            name:'Share',
            icon:require('./../../assets/images/share.png'),
            url:'tel:'+business?.contact
            }
];
console.log('Call URL:', actionButtonMenu[0].url);

    const OnPressHandle=(item)=>{
        console.log('Pressed Item:', item); // Log the item being pressed
        console.log('URL to be opened:', item.url); // Log the URL that will be opened
        if(item.name=='Share'){
            Share.share({
             message:"Banana Type: "+business?.category+"\n Price: Ksh "+business?.price +"\n Quantity: "+business?.quantity+"\n Contact Farmer through Banana Farmers Hub App"  
            })
            return ;
        }
        Linking.openURL(item.url);
    }
  return (
    <View style={{
        backgroundColor:'#fff',
        padding:20
    }}>
    <FlatList
    data={actionButtonMenu}
    numColumns={4}
    columnWrapperStyle={{justifyContent:'space-between'}}
    renderItem={({item,index})=>(
        <TouchableOpacity key={index}
        onPress={()=>OnPressHandle(item)}
        >
           <Image source={item?.icon} 
           style={{
            width:30,
            height:30
           }}
           />
           <Text style={{
            fontFamily:'outfit-medium',
            fontSize:15,
            textAlign:'center',
            marginTop:3
           }}>{item.name}</Text>
        </TouchableOpacity>
    )}
    
    />
    </View>
  );
}