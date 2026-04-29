import React, {useState, useEffect, useCallback} from "react";
import { SafeAreaView, ScrollView, View, Text, ActivityIndicator, StyleSheet, RefreshControl, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, FONT, SIZES } from "../../constants";
import DailyMeditation from "../../components/DailyMeditation";
import { useFocusEffect } from "expo-router";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";

const Favorites = () => {

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
            {text: "Cancel", style:"cancel"},
            {
                text:"Clear All",
                style:"destructive",
                onPress: async () => {
                    await AsyncStorage.removeItem("favorites");
                    setFavorites([]);
                }
            },
        ]
        );
    };


    useFocusEffect(
        React.useCallback(() => {
            loadFavories();
        }, [])
    );

    return(
       <SafeAreaView style={{flex:1, backgroundColor: COLORS.primaryDark}}>
        <ScreenHeaderBtn />
        <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
            <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={COLORS.primary} // for IOS
            colors={[COLORS.primary]} //for Android
            />
        }
        >
            <View style={styles.container}>
                {isLoading ? (
                    <ActivityIndicator size={"large"} color={COLORS.primary} />
                ) : favorites.length === 0 ? (
                    <Text style={styles.headerTitle}>No favorite items found.</Text>
                ) : (
                    <><View style={styles.headerRow}>
                    <Text style={{textAlign:"center", color:COLORS.gray2, fontWeight:"bold" }}>My Favorite Exercises</Text>
                    <TouchableOpacity onPress={clearFavorites}>
                        <Text style={styles.clearBtnText}>Clear All</Text>
                    </TouchableOpacity>
                    </View>
                    <DailyMeditation meditations={favorites} />
                    </>
                )}
            </View>
        </ScrollView>
       </SafeAreaView>
    )

    const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    padding: SIZES.medium,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    textAlign: "center",
    marginTop: 20,
  },
  headerRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom: SIZES.medium,
  },
  subHeader: {
    color:COLORS.gray2,
    fontWeight:"bold",
    fontFamily: FONT.medium,
  },
  clearBtnText: {
    color: COLORS.tertiary || "#FF7754",
    fontWeight:"600",
  },
  headerTitle:{
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    textAlign:"center",
    marginTop:20,
  },
});

}

export default Favorites;