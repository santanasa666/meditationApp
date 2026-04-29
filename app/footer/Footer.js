import { View, Text, TouchableOpacity, Share, Alert } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./Footer.style";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTheme } from "../context/ThemeContext";

// Fixed: Destructured 'data' from props
const Footer = ({ data }) => {
    
    const { colors } = useTheme(); 

    const themedStyles = styles(colors);  

    const [isFavorite, setIsFavorite] = useState(false);

    
    
    const checkIfFavorite = async () => {
        try {
            const favorites = await AsyncStorage.getItem("favorites");
            const favoritesArray = favorites ? JSON.parse(favorites) : [];
            // Fixed: Added optional chaining to prevent errors if data is null
            const isFav = favoritesArray.some((item) => item.id === data?.id);
            setIsFavorite(isFav);
        } catch (error) {
            console.error("Failed to fetch favorites", error);
        }
    };

    useEffect(() => {
        if (data?.id) {
            checkIfFavorite();
        }
    }, [data?.id]); // Re-run if the meditation ID changes

    const handleFavoriteToggle = async () => {
        try {
            let favorites = await AsyncStorage.getItem("favorites");
            favorites = favorites ? JSON.parse(favorites) : [];

            let updatedFavorites;
            if (isFavorite) {
                updatedFavorites = favorites.filter((item) => item.id !== data.id);
            } else {
                updatedFavorites = [...favorites, data];
            }

            // Fixed: Save the updated list back to storage
            await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            
            // Fixed: Update the UI state
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error("Failed to update favorites", error);
        }
    };

    return (
        // Fixed: Changed 'style.container' to 'styles.container'
        <View style={themedStyles.container}>
            <TouchableOpacity style={themedStyles.likeBtn} onPress={handleFavoriteToggle}>
                <FontAwesome 
                    name={isFavorite ? "heart" : "heart-o"} 
                    size={24} // Increased size slightly for better visibility
                    color={isFavorite ? colors.primary : colors.gray2}
                />
            </TouchableOpacity>

            <TouchableOpacity style={themedStyles.applyBtn} onPress={handleFavoriteToggle}>
                <Text style={themedStyles.applyBtnText}>
                    {isFavorite ? "Remove from favorites" : "Add to favorites"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Footer;