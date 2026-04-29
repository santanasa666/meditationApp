import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator, } from "react-native";
import { SIZES, FONT, SHADOWS } from "../constants";
import useFetch from "../hook/useFetch";
import { useTheme } from "../app/context/ThemeContext";

const DailyMeditation = () => {

    const { colors } = useTheme();
    const router = useRouter();

    const themedStyles = styles(colors); 
    
    const { isLoading, error, bestMeditations } = useFetch("search", {
        query:"meditation",
        numPages:"1",
    });

    const handleNavigate = (id) => {
        router.push(`/meditation-details/${id}`);
    };

    const data = bestMeditations;

    return (
        <View style={themedStyles.container}>
            <View style={themedStyles.header}>
                <Text style={themedStyles.headerTitle}>Daily Meditation</Text>
            </View>

            <View style={themedStyles.container}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={colors.primary} />
                ) : error ? ( 
                    <Text style={themedStyles.errorText}>Something went wrong</Text>

                ) : (
                    data?.map((meditation) => (
                        <TouchableOpacity
                        key={`meditation-${meditation.id}`}
                        style={themedStyles.cardsContainer}
                        onPress={() => handleNavigate(meditation.id)}
                        >
                            <View style={themedStyles.logoContainer}>
                                <Image 
                                source={{uri: meditation.image}}
                                resizeMode="cover"
                                style={themedStyles.logoImage}
                                />
                            </View>
                            <View style={themedStyles.textContainer}>
                                <Text 
                                style={themedStyles.meditationName}
                                numberOfLines={1}
                                >{meditation.title}
                                </Text>
                                <View style={themedStyles.tabsContainer}>
                                    <Text
                                style={themedStyles.meditationDetail}
                                >
                                    {meditation.duration}
                                </Text>
                                <Text
                                style={themedStyles.meditationType}
                                >
                                    {meditation.target}
                                </Text>
                                
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))

                )}
            </View>
        </View>
    );
};

const styles = (themeColors) => StyleSheet.create({
    container:{
        flex:1,
        marginTop:SIZES.xLarge,
        marginBottom:SIZES.small,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:SIZES.small,
        marginBottom:SIZES.small,
    },
    headerTitle:{
        fontSize:SIZES.large,
        fontFamily:FONT.medium,
        color:themeColors.primary,
    },
    
    cardsContainer:{
        flex:1,
        justifyContent: "space-between",
        padding:SIZES.medium,
        borderRadius:SIZES.xLarge,
        backgroundColor: themeColors.backgroundColor,
        
        
        marginVertical:SIZES.small,
        borderWidth:1.5,
        borderColor:themeColors.gray2 ,
    },
    logoContainer: {
        width:"100%",
        height:150,
        backgroundColor: themeColors.white,
        justifyContent:"center",
        borderRadius: SIZES.medium,
        alignItems: "center",
    },

    logoImage: {
        width: "100%",
        height:"100%",
        borderRadius: SIZES.medium,
    },
    textContainer:{

        
        marginTop:SIZES.medium,
        
    },
    meditationName: {
        fontSize: SIZES.medium,
        fontFamily:"DMBOLD",
        color: themeColors.primary,
    },
    tabsContainer: {
        
        paddingVertical: SIZES.small / 2,
        marginTop: SIZES.xxxSmall,
        width: "100%",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    meditationDetail:{
        fontSize: SIZES.medium - 2,
        fontFamily: FONT.regular,
        color: themeColors.gray,
        marginTop: SIZES.small,
        
        
    },
    meditationType:{
        fontSize: SIZES.small,
        fontFamily: FONT.regular,
        color: themeColors.text,
        marginTop: SIZES.small / 1.5,
        paddingVertical: SIZES.small / 2.5,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.small,
        borderWidth: 1,
        borderColor: themeColors.gray2,
    },

    errorText:{
        color: themeColors.error,
    },
    
});


export default DailyMeditation;

