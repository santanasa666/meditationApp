import { useEffect, useState } from "react";
import { COLORS, SIZES } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, ScrollView, View } from "react-native"; // Fixed: react-native-web to react-native
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import Welcome from "../components/Welcome";
import PopularMeditation from "../components/PopularMeditation";
import DailyMeditation from "../components/DailyMeditation";
import { Stack } from "expo-router";

const Home = () => {
    const [userDetails, setUserDetails] = useState(null);

    const loadUserDetails = async () => {
        try {
            const user = await AsyncStorage.getItem("userDetails");
            if (user) {
                setUserDetails(JSON.parse(user));
            }
        } catch (error) {
            console.error("Error loading user details:", error);
        }
    };

    useEffect(() => {
        loadUserDetails();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <ScreenHeaderBtn />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome userDetails={userDetails} />
                    <PopularMeditation />
                    <DailyMeditation />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;