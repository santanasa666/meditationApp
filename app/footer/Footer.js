import { View, Text, TouchableOpacity, Share, Alert } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./Footer.style";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTheme } from "../context/ThemeContext";
import VolumetricButton from "../../assets/button";


const Footer = ({ data }) => {
    
    const { colors } = useTheme(); 

    const themedStyles = styles(colors);  

    const [isFavorite, setIsFavorite] = useState(false);

    
    
    const checkIfFavorite = async () => {
        try {
            const favorites = await AsyncStorage.getItem("favorites");
            const favoritesArray = favorites ? JSON.parse(favorites) : [];

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

            
            await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            
           
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error("Failed to update favorites", error);
        }
    };

    return (
        
        <View style={themedStyles.container}>
            <TouchableOpacity style={themedStyles.likeBtn} onPress={handleFavoriteToggle}>
                <FontAwesome 
                    name={isFavorite ? "heart" : "heart-o"} 
                    size={24} 
                    color={isFavorite ? colors.primary : colors.gray2}
                />
            </TouchableOpacity>
            <View style={themedStyles.longBtn}><VolumetricButton title={isFavorite ? "Remove from favorites" : "Add to favorites"} onPress={handleFavoriteToggle} /></View>
            
        </View>
    );
}

export default Footer;