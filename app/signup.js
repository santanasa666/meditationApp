import React, { useState } from "react";
import {
    View,
    SafeAreaView,
    Image,
    Alert,
    TouchableOpacity,
    Text,        
    TextInput    
} from "react-native"; 

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router"; // Removed 'Color' as it's likely unused here
import { COLORS, icons, SHADOWS } from "../constants";
import VolumetricButton from "../assets/button";
import CustomInput from "../components/dynamicInput";


const SignUp = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleRegister = async () => {
        if (!userName || !email || !password) {
            Alert.alert("Validation Error", "Please fill in all fields");
            return;
        }

        const userDetails = { userName, email, password, token:"sample-token"};
        await AsyncStorage.setItem("userDetails", JSON.stringify(userDetails));
        console.log("User logged in:", userDetails);

        router.push("/login");
    };

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gray1 }}>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: COLORS.lightWhite },
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <></>
                        ),
                        headerTitle: "",
                    }}
                />
                <View style={{padding: 20}} testID="signupContainer">
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
                    <View style={{marginTop: 30}} testID="formData">
                        <View style={{marginBottom: 0}} testID="userName">
                            <CustomInput 
                            value={userName}
                            onChangeText={setUserName}
                            placeholder="UserName"
                            />                            
                        </View>
                        <View style={{marginBottom: 0}}  testID="email">
                            <CustomInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email"
                            />                            
                        </View>
                        <View style={{marginBottom: 40}} testID="password">
                            <CustomInput
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            placeholder="Password"
                            />                            
                        </View>
                        <VolumetricButton title="Sign Up" onPress={handleRegister} testID="handleRegister"/>
                        
                        <View
                        style={{
                            flexDirection:"row",
                            justifyContent:"center",
                            alignItems: "center",
                            marginTop: 5,
                        }}
                        testID="textData"
                        >
                            <Text style={{ marginRight: 5 }}>Already have an account?</Text>
                            <TouchableOpacity onPress={() => {router.push("/login")}}>
                                <Text style={{color: COLORS.primary, fontWeight:500}}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default SignUp;

