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
import Toast from "react-native-toast-message";


import { Stack, useRouter } from "expo-router";
import { COLORS, icons, SHADOWS } from "../constants";
import VolumetricButton from "../assets/button";
import CustomInput from "../components/dynamicInput";

import { saveUserDetails } from "./utils/localStorage";

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const router = useRouter();

    const handleRegister = async () => {

        setErrors({});
        let validationErrors = {};

        // Check for empty fields
        if (!userName.trim()) validationErrors.userName = "Username is required";
        if (!email.trim()) validationErrors.email = "Email is required";
        if (!password.trim()) validationErrors.password = "Password is required";

        // Username Length Criteria
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() && !emailRegex.test(email)) {
            validationErrors.email = "Please enter a valid email address";
        }

        if (password && password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const userDetails = { userName, email, password, token: "sample-token" };

        try {
            await saveUserDetails(userDetails);
            Toast.show({
                type: 'success',
                text1: 'Account Created',
                text2: 'Welcome to the app! Please login.'
            });
            router.push("/login");
        } catch (error) {
            Toast.show({ type: 'error', text1: 'Error', text2: 'Failed to save account.' });
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.backgroundColor },
                    headerShadowVisible: false,
                    headerLeft: () => <></>,
                    headerTitle: "",
                }}
            />
            <View style={{ padding: 20 }} testID="signupContainer">
                <View style={{
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
                        style={{ width: 70, height: 80, marginBottom: 40, padding: 20 }}
                    />
                </View>

                <View style={{ margin: 0 }}>
                    <Text style={{ textAlign: "center", color: COLORS.primary, fontWeight: "600" }}>
                        Create an account
                    </Text>
                </View>

                <View style={{ marginTop: 15 }} testID="formData">
                    <View style={{ marginBottom: 0 }} testID="userName">
                        <CustomInput
                            value={userName}
                            onChangeText={setUserName}
                            placeholder="UserName"
                            iconName="user"
                        />
                        {errors.userName && <Text style={{ color: COLORS.error, fontSize: 12 }}>{errors.userName}</Text>}
                    </View>
                    <View style={{ marginBottom: 0 }} testID="email">
                        <CustomInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email"
                            iconName="mail"
                        />
                        {errors.email && <Text style={{ color: COLORS.error, fontSize: 12 }}>{errors.email}</Text>}
                    </View>
                    <View style={{ marginBottom: 40 }} testID="password">
                        <CustomInput
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            placeholder="Password"
                            iconName="lock"
                        />
                        {errors.password && <Text style={{ color: COLORS.error, fontSize: 12 }}>{errors.password}</Text>}
                    </View>

                    <VolumetricButton title="Sign Up" onPress={handleRegister} testID="handleRegister" />

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 5,
                    }} testID="textData">
                        <Text style={{ marginRight: 5 }}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => { router.push("/login") }}>
                            <Text style={{ color: COLORS.primary, fontWeight: "500" }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;