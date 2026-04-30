import React, {useState, useEffect, useCallback} from "react";
import { SafeAreaView, ScrollView, View, Text, ActivityIndicator, StyleSheet, RefreshControl, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FONT, SIZES } from "../../constants";
import DailyMeditation from "../../components/DailyMeditation";
import { useFocusEffect } from "expo-router";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";
import { useTheme } from "../context/ThemeContext";

const Favorites = () => {

    const { colors } = useTheme();

    const themedStyles = styles(colors);

    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    // Load favorites from storage
    const loadFavorites = async () => {
        try {
            const storedFavorites = await AsyncStorage.getItem("favorites");
            const favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];
            setFavorites(favoritesArray);
        } catch (error) {
            console.error("Error loading favorites:", error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    };

    //Pull to refresh handler
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        loadFavorites();
    }, []);

    //Clear all favorites handler
    const clearFavorites = () => {
    Alert.alert(
        "Clear Favorites",
        "Are you sure you want to remove all saved items?",
        [
            { text: "Cancel", style: "cancel" },
            {
                text: "Clear All",
                style: "destructive",
                onPress: async () => {
                    try {
                       
                        await AsyncStorage.setItem("favorites", JSON.stringify([]));
                        
                        
                        setFavorites([]); 
                    } catch (error) {
                        console.error("Failed to clear favorites:", error);
                        Alert.alert("Error", "Could not clear favorites. Please try again.");
                    }
                }
            },
        ]
    );
};


    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    );

    return(
       <SafeAreaView style={{flex:1, backgroundColor: colors.gray3}}>
        <ScreenHeaderBtn />
        <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
            <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary} // for IOS
            colors={[colors.primary]} //for Android
            />
        }
        >
            <View style={themedStyles.container}>
                {isLoading ? (
                    <ActivityIndicator size={"large"} color={colors.primary} />
                ) : favorites.length === 0 ? (
                    <Text style={themedStyles.headerTitle}>No favorite items found.</Text>
                ) : (
                    <><View style={themedStyles.headerRow}>
                    <Text style={themedStyles.favoriteTitle}>My Favorite Exercises</Text>
                    <TouchableOpacity onPress={clearFavorites}>
                        <Text style={themedStyles.clearBtnText}>Clear All</Text>
                    </TouchableOpacity>
                    </View>
                    <DailyMeditation meditations={favorites} />
                    </>
                )}
            </View>
        </ScrollView>
       </SafeAreaView>
    );

    

};

const styles = (themeColors) => StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    padding: SIZES.medium,
    alignContent:"center",
    alignItems:"center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: themeColors.text,
    textAlign: "center",
    marginTop: 20,
  },
  favoriteTitle:{
    color:themeColors.gray, 
    fontWeight:"bold" 
  },
  
  subHeader: {
    color:themeColors.text,
    fontWeight:"bold",
    fontFamily: FONT.medium,
  },
 headerRow: {
    width: "100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: "center",
    marginBottom: SIZES.medium,
    paddingHorizontal: 5, 
    borderBottomWidth:2,
    borderBottomColor:themeColors.gray1
},
clearBtnText: {
    color: themeColors.error || "#f91818",
    fontWeight: "600",
    padding: 10, 
},
  headerTitle:{
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: themeColors.gray,
    textAlign:"center",
    marginTop:150,
  },
});

export default Favorites;