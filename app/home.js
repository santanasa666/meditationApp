import { useEffect, useState } from "react";
import { COLORS, SIZES } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, ScrollView, View } from "react-native";
import { useTheme } from "./context/ThemeContext";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import Welcome from "../components/Welcome";
import PopularMeditation from "../components/PopularMeditation";
import DailyMeditation from "../components/DailyMeditation";
import DailyQuote from "../components/DailyQuote";
import { Stack } from "expo-router";

const Home = () => {
    const [userDetails, setUserDetails] = useState(null);
    const { isDarkMode, colors } = useTheme();



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
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
            <ScreenHeaderBtn />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome userDetails={userDetails} isDarkMode={isDarkMode} />
                    <DailyQuote isDarkMode={isDarkMode}/>   
                    <PopularMeditation isDarkMode={isDarkMode} />
                    <DailyMeditation isDarkMode={isDarkMode}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;