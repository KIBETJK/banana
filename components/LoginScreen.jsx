import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser"
import {Colors} from './../constants/Colors'
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';


WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (

    <View>
        <View style={{
            display:'flex',
            alignItems:'center',
            marginTop:50
        }}>
      <Image source={require('./../assets/images/login.jpg')}
      style={{
        width:360,
        height:370,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#000'

      }}
      />
      </View>

      <View style={styles.subContainer}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:30,
          textAlign:'center',
          color:Colors.PRIMARY
        }}>BOMET COUNTY BANANAS HUB</Text>
        <Text style={{
          fontSize:25,
          fontFamily:'outfit-medium',
          textAlign:'center'
        }}>Let's Go 
            <Text style={{
                color:Colors.PRIMARY
            }}> BANANAS</Text>!!</Text>
            <Text style={{
              fontSize:18,
              fontFamily:'outfit',
              textAlign:'center',
              marginVertical:15,
              color:Colors.GRAY
            }}>Find Bananas for Sale in Bomet County at your Simplest Convenience!</Text>
    <TouchableOpacity style={styles.btn}
    onPress={onPress}
    >
      <Text style={{
        textAlign:'center',
        color:'#fff',
        fontFamily:'outfit'
      }}>Get Started</Text>
    </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
   subContainer:{
    backgroundColor:'#fff',
    padding:20,
    marginTop:-20
   },
   btn:{
    backgroundColor:Colors.PRIMARY,
    padding:16,
    borderRadius:99,
    marginTop:10

   }
})