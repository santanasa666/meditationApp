import { View, Text, TouchableOpacity, Share, Alert } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./Footer.style";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { COLORS } from "../../constants";

// Fixed: Destructured 'data' from props
const Footer = ({ data }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    // Check if this specific item is in favorites on mount
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
        <View style={styles.container}>
            <TouchableOpacity style={styles.likeBtn} onPress={handleFavoriteToggle}>
                <FontAwesome 
                    name={isFavorite ? "heart" : "heart-o"} 
                    size={24} // Increased size slightly for better visibility
                    color={isFavorite ? COLORS.primary : COLORS.gray2}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.applyBtn} onPress={handleFavoriteToggle}>
                <Text style={styles.applyBtnText}>
                    {isFavorite ? "Remove from favorites" : "Add to favorites"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Footer;