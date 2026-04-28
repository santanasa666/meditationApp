import { useEffect, useState } from "react";
import { COLORS, SIZES } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, ScrollView, View } from "react-native-web";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import Welcome from "../components/Welcome";
import PopularMeditation from "../components/PopularMeditation";
import DailyMeditation from "../components/DailyMeditation";




const loadUserDetails = async () => {
    const user = await AsyncStorage.getItem("userDetails");
    console.log("user", user);
    setUserDetails(user);
};

const Home = () => {
const [userDetails, setUserDetails] = useState(null);

const loadUserDetails = async () => {
    try {
        const user = await AsyncStorage.getItem("userDetails");
        console.log("user", user);
        setUserDetails(user);
    } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
    loadUserDetails();
}, []);

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
                <ScreenHeaderBtn />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{ flex: 1, padding: SIZES.medium, }} >
                        <Welcome userDetails={userDetails ? JSON.parse(userDetails) : null} />
                        <PopularMeditation/>
                        <DailyMeditation />
                    </View>
                </ScrollView>

            </SafeAreaView>
        </>
    );

};

export default Home;