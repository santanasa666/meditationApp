import React, { useState } from "react";
import { View, SafeAreaView, Image, Alert, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, SHADOWS } from "../constants";
import VolumetricButton from "../assets/button";
import { globalStyles } from "../assets/styles/global";
import CustomInput from "../components/dynamicInput";


const login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

      const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return;
    }

    const userDetails = { email, password, token: "sample-token" };

    console.log('userDetails', userDetails);

    try {
      const detailsDatafromSignup = await AsyncStorage.getItem("userDetails");
      if (detailsDatafromSignup) {
        const parsedDetails = JSON.parse(detailsDatafromSignup);
        if (userDetails.email === parsedDetails.email && userDetails.password === parsedDetails.password) {
          router.push("/home");
        } else {
          Alert.alert("Error", "Incorrect email or password.");
          alert("Error Incorrect email or password.");
        }
      } else {
        Alert.alert("Error", "No user details found in AsyncStorage.");
        alert("Error No user details found in AsyncStorage.");
      }
    } catch (error) {
      console.error("Error accessing AsyncStorage", error);
    }
  };


    return (
        <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                    <></>
                ),
                headerStyle:"",
            }}
            />

            <View style={{ padding: 20}}>
                <View 
                style={{
                    padding:20,
                    marginLeft: "auto",
                    marginRight:"auto",
                    
                    borderRadius: 50, 
                    height: 120,
                    ...SHADOWS.medium,
                    shadowColor: COLORS.white,
                }}>

                    <Image 
                    source={icons.logoV}
                    style={{
                        width: 60,
                        height: 70,
                        marginBottom: 40,
                        padding:20,
                    }}
                    />

                </View>
                <View style={{marginBottom:10, marginTop:10}}><Text style={{textAlign:"center", color:COLORS.primary, fontWeight:600}}>Welcome Back!</Text></View>

                
                <View
                style={{marginTop: 20 }}>
                    <View style={{marginBottom: 10}}>
                        
                        <CustomInput
                        
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                        
                        
                        
                        
                        />
                        <CustomInput 
                        
                        value={password}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry={true}
                        
                        />

                        
                    </View>

                    <View
                style={{
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    marginBottom:50,
                }}
                >
                    
                    <TouchableOpacity><Text style={{color:COLORS.primary, fontWeight:400}}>Forgot Password?</Text></TouchableOpacity>

                </View>

                    <VolumetricButton title="Login" onPress={handleLogin}/>
                    
                </View>

                {/* Additional options*/}
                <View
                style={{
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    margin:10,
                }}
                >
                    <Text
                    style={{
                        marginRight: 5
                    }}
                    >Don't have an account?</Text>
                    <TouchableOpacity onPress={()=> router.push("/signup")}><Text style={{color:COLORS.primary, fontWeight:500}}>Sign Up</Text></TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
};

export default login;