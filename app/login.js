import React, { useState } from "react";
import { View, SafeAreaView, Image, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, SHADOWS } from "../constants";
import VolumetricButton from "../assets/button";
import CustomInput from "../components/dynamicInput";

const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const router = useRouter();

    const handleLogin = async () => {
        // Clear previous errors
        setErrors({});
        let validationErrors = {};
        
        // Check for empty fields
        if (!email.trim()) validationErrors.email = "Email is required";
        if (!password.trim()) validationErrors.password = "Password is required";

        // Stop execution if field errors exist
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
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
                    // Display incorrect credential error inline
                    setErrors({ general: "Incorrect email or password." });
                }
            } else {
                // Display missing account error inline
                setErrors({ general: "No user details found. Please sign up first." });
            }
        } catch (error) {
            console.error("Error accessing AsyncStorage", error);
            setErrors({ general: "An error occurred during login. Please try again." });
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => <></>,
                    headerTitle: "",
                }}
            />

            <View style={{ padding: 20 }}>
                <View 
                    style={{
                        padding: 20,
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: 50, 
                        height: 120,
                        ...SHADOWS.medium,
                        shadowColor: COLORS.white,
                    }}>
                    <Image 
                        source={icons.logoV}
                        style={{
                            width: 70,
                            height: 80,
                            marginBottom: 40,
                            padding: 20,
                        }}
                    />
                </View>
                
                <View style={{ marginBottom: 10, marginTop: 10 }}>
                    <Text style={{ textAlign: "center", color: COLORS.primary, fontWeight: "600" }}>
                        Welcome Back!
                    </Text>
                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={{ marginBottom: 10 }}>
                        
                        {/* Email Input & Error */}
                        <View style={{ marginBottom: 0 }}>
                            <CustomInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder="Email"
                                iconName="mail"
                            />
                            {errors.email && <Text style={{ color: COLORS.error, fontSize: 12 }}>{errors.email}</Text>}
                        </View>

                        {/* Password Input & Error */}
                        <View style={{ marginBottom: 0 }}>
                            <CustomInput 
                                value={password}
                                secureTextEntry={true}
                                onChangeText={setPassword}
                                placeholder="Password"
                                iconName="lock"
                            />
                            {errors.password && <Text style={{ color: COLORS.error, fontSize: 12 }}>{errors.password}</Text>}
                        </View>

                        {/* General Authentication Error */}
                        {errors.general && (
                            <Text style={{ color: COLORS.error, fontSize: 14, textAlign: 'center', marginTop: 10 }}>
                                {errors.general}
                            </Text>
                        )}
                        
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 30, // Adjusted margin to fit errors cleanly
                        marginTop: 10
                    }}>
                        <TouchableOpacity>
                            <Text style={{ color: COLORS.primary, fontWeight: "400" }}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <VolumetricButton title="Login" onPress={handleLogin} />
                </View>

                {/* Additional options */}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                    marginTop: 20
                }}>
                    <Text style={{ marginRight: 5 }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => router.push("/signup")}>
                        <Text style={{ color: COLORS.primary, fontWeight: "500" }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default login;