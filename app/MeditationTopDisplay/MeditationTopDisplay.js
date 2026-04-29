import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./MeditationTopDisplay.style";
import { useTheme } from "../context/ThemeContext";


import Feather from '@expo/vector-icons/Feather';



const MeditationTopDisplay = ({ meditationImage, meditationTitle, duration, target }) => {

    const { colors } = useTheme(); 
    const themedStyles = styles(colors);
    return(
        
        <View style={themedStyles.container}>
            <View style={themedStyles.logoBox}>
                <Image 
                source={{
                    uri: meditationImage,
                }}
                resizeMode="cover"
                style={themedStyles.logoImage}
                />
            </View>
            <View style={themedStyles.meditationTitleBox}>
                <Text style={themedStyles.meditationTitle}>{meditationTitle}</Text>
            </View>

            <View style={themedStyles.meditationInfoBox}>
                
                <View style={themedStyles.durationBox}>
                    <Feather name="clock" style={themedStyles.durationImage} size={14} color={colors.gray} />

                    <Text style={themedStyles.durationName}>{duration}</Text>
                </View>
                <Text style={themedStyles.meditationName}>{target}</Text>
            </View>
        </View>

    );
}

export default MeditationTopDisplay;