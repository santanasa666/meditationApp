import { useState } from "react";
import { useRouter } from "expo-router";
import { FONT, SHADOWS, SIZES } from "../constants";
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { useTheme } from "../app/context/ThemeContext";
import useFetch from "../hook/useFetch";

const PopularMeditation = () => {
    const { colors } = useTheme();
    const router = useRouter();

    const themedStyles = styles(colors); 

    const { data, isLoading, error } = useFetch("search", {
        query: "React developer",
        num_pages: "1",
    });
    const [selectedMeditation, setSelectedMeditation] = useState();

    const handleCardPress = (item) => {
        router.push(`/meditation-details/${item.id}`);
        setSelectedMeditation(item.id);
    };

    const renderMeditationCard = ({ item }) => (
        <TouchableOpacity
            style={themedStyles.container(selectedMeditation, item)}
            onPress={() => handleCardPress(item)}
        >
            <TouchableOpacity style={themedStyles.logoContainer(selectedMeditation, item)}>
                <Image
                    source={{ uri: item?.image }}
                    resizeMode="cover"
                    style={themedStyles.logoImage}
                />
            </TouchableOpacity>
            

            <View style={themedStyles.infoContainer}>
                <Text
                    style={themedStyles.meditationName(selectedMeditation, item)}
                    numberOfLines={1}
                >
                    {item.title}
                </Text>
                <View style={themedStyles.infoWrapper}>
                    <Text style={themedStyles.publisher(selectedMeditation, item)}>
                        {item?.shortDescription}
                    </Text>
                </View>
            </View>
            <View style={themedStyles.tabsContainer}><Text style={themedStyles.location}> {item.duration}</Text>
                <Text style={themedStyles.companyName} numberOfLines={1}>
                    {item.target}
                </Text>
            </View>
        </TouchableOpacity>
    );




    return (
        <>
            <View style={StyleSheet.container} testID="popularContainer">
                <View style={StyleSheet.header} testID="popularHeader">
                    <Text style={themedStyles.headerTitle}>Popular Meditations</Text>
                    <View style={themedStyles.cardsContainer}>
                        {isLoading ? (
                            <ActivityIndicator size="large" color={colors.primary} />
                        ) : error ? (
                            <Text>Something went wrong</Text>
                        ) : (
                            <FlatList
                                data={data}
                                keyExtractor={(item) => item.id}
                                renderItem={renderMeditationCard}
                                contentContainerStyle={{ columnGap: SIZES.medium }}
                                horizontal
                            ></FlatList>
                        )}
                    </View>
                    <TouchableOpacity></TouchableOpacity>
                </View>
            </View>
        </>
    );


};
const styles = (themeColors) => StyleSheet.create({

    container: (selectedMeditation, item) => ({
        width: 270,
        padding: SIZES.xSmall,
        marginHorizontal: SIZES.small,
        marginTop: SIZES.small,
        backgroundColor: selectedMeditation === item.id ? themeColors.primary : themeColors.backgroundColor,
        borderRadius: SIZES.xLarge,
        justifyContent: "space-between",
        ...SHADOWS.medium,
        shadowColor: themeColors.white,
         borderWidth:1,
        borderColor:themeColors.gray2,

    }),
    logoImage: {
        width: "100%",
        height: "100%",
        borderRadius: SIZES.xxxSmall,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: themeColors.primary,
        marginBottom:0,
        marginTop:SIZES.large,
    },
    headerBtn: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: themeColors.gray,
    },

    cardsContainer: {
        marginTop: SIZES.medium,
    },

    logoContainer: (selectedMeditation, item) => ({
    width: "100%",
    height: 150, // Change from "100%" to a fixed number like 150
    borderRadius: SIZES.small,
    overflow: 'hidden',
   
}),

    tabsContainer: {
        paddingVertical: SIZES.small / 2,
        marginTop: SIZES.medium,
        width: "100%",
        flexDirection:"row",
        justifyContent:"space-between",
    },

    companyName: {
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
    infoContainer: {
        marginTop: SIZES.large,
    },
    meditationName: (selectedMeditation, item) => ({
        fontSize: SIZES.medium,
        fontFamily: FONT.regular,
        color: selectedMeditation == item.id ? themeColors.white : themeColors.primary,
        fontWeight:"bold",
    }),
    infoWrapper: {
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "flex-start",
        alignItems: "center",

    },
    publisher: (selectedMeditation, item) => ({
        fontSize: SIZES.medium - 2,
        fontFamily: FONT.regular,
        color: selectedMeditation === item.id ? themeColors.white : themeColors.text,

    }),

    location: {
        fontSize: SIZES.medium - 2,
        fontFamily: FONT.regular,
        color: themeColors.gray,
        marginTop: SIZES.small,
    },

});
export default PopularMeditation;