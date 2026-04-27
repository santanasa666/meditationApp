import React, { useState } from "react";
import {
    View,
    SafeAreaView,
    Image,
    Alert,
    TouchableOpacity
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Color, Stack, useRouter } from "expo-router";
import { COLORS, icons, SHADOWS } from "../constants";
import { TextInput } from "react-native-web";

const SignUp = () => {

    const [userName, SetUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
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
                        padding: 20,
                        marginLeft: "auto",
                        marginRight:"auto",
                        backgroundColor:"#f0f0f0",
                        borderRadius: 50,
                        height: 90,
                        ...SHADOWS.medium,
                        shadowColor: COLORS.white,
                    }}
                    testID="ImageIcon"
                    >
                        <Image 
                        source={icons.menu}
                        style={{height:50, width:50}}
                        />

                    </View>
                    <View style={{marginTop: 30}} testID="formData">
                        <View style={{ marginBottom: 10 }} testID="userName">
                            <TextInput style={{
                                borderColor:"ccc",
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                            }}
                            value={userName}
                            onChangeText={setUserName}
                            placeholder="UserName"
                            />                            
                        </View>
                        <View style={{ marginBottom: 10 }} testID="email">
                            <TextInput style={{
                                borderColor:"ccc",
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                            }}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email"
                            />                            
                        </View>
                        <View style={{ marginBottom: 10 }} testID="password">
                            <TextInput style={{
                                borderColor:"ccc",
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                            }}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            placeholder="Password"
                            />                            
                        </View>
                        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.primary,
                                padding: 15,
                                borderRadius: 5,
                                alignItems:"center",
                                marginBottom: 10,
                            }}
                            onPress={handleRegister}
                            testID="handleRegister"
                        >
                            <Text
                            style={{
                                color: "#fff",
                                fontWeight: "bold"
                            }}
                            >Sign Up</Text>
                        </TouchableOpacity>
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
                                <Text style={{color: "blue"}}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    
})