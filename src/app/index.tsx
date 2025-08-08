
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SignUp from "./signup";
import { Link } from "expo-router";

export default function Page() {
 
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={{fontFamily:'Poppins' , fontSize:40}}>
          Home Page
        </Text>
        <Text style={{fontFamily:'Poppins-BoldItalic'}}>
          Home Page
        </Text >
        <Text   style={{fontFamily:'Poppins-ExtraBold'}}>Medhat hamada</Text>
       <Link href='/signup'>signup</Link>
       <Link href='/login'>login</Link>
       <Link href='/forget-password'>ForgetPassword</Link>
       <Link href='/verify-code'>Verification-Code</Link>
       <Link href='/reset-password'>Reset-password</Link>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
