import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./MeditationTopDisplay.style";
import { COLORS } from "../../constants";

import Feather from '@expo/vector-icons/Feather';

const MeditationTopDisplay = ({ meditationImage, meditationTitle, duration, target }) => {
    return(
        
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <Image 
                source={{
                    uri: meditationImage,
                }}
                resizeMode="cover"
                style={styles.logoImage}
                />
            </View>
            <View style={styles.meditationTitleBox}>
                <Text style={styles.meditationTitle}>{meditationTitle}</Text>
            </View>

            <View style={styles.meditationInfoBox}>
                <Text style={styles.meditationName}>{target} / </Text>
                <View style={styles.durationBox}>
                    <Feather name="clock" style={styles.durationImage} size={14} color={COLORS.primary} />

                    <Text style={styles.durationName}>{duration}</Text>
                </View>
            </View>
        </View>

    );
}

export default MeditationTopDisplay;