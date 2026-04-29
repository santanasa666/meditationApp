import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, Share, Alert, StyleSheet } from "react-native";
import { MeditationTopDisplay, About, Footer, Tabs } from "../../components";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";
import { icons, SIZES, FONT } from "../../constants"; 
import useFetch from "../../hook/useFetch";
import { useTheme } from "../context/ThemeContext";

const tabs = ["About", "Instructions"];

const MeditationDetails = () => {
    const params = useGlobalSearchParams();
    const id = params.id;
    const { colors } = useTheme(); 

    const themedStyles = styles(colors); 

    const { data, isLoading, error, refetch } = useFetch("search", {
        query: id,
    });

    const meditationItem = data?.[0]; 

    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, [refetch]);

    const displayTabContent = () => {
        if (activeTab === "About") {
            return (
                <About
                    title={meditationItem?.title}
                    info={meditationItem?.description ?? "No data provided"}
                />
            );
        } else if (activeTab === "Instructions") {
            return (
                <View style={styles.specificsContainer}>
                    <Text style={themedStyles.specificsTitle}>Instructions:</Text>
                    <View style={themedStyles.pointsContainer}>
                        {(meditationItem?.instructions ?? ["N/A"]).map((item, index) => (
                            <View style={themedStyles.pointWrapper} key={index}>
                                <View style={[themedStyles.pointDot, { backgroundColor: colors.primary }]} />
                                <Text style={[themedStyles.pointText, { color: colors.hintText }]}>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            );
        }
        return null;
    };

    const onShare = async () => {
        try {
            await Share.share({
                message: `Check out this meditation: ${meditationItem?.title} (${meditationItem?.duration})`,
            });
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    return (
        <SafeAreaView style={themedStyles.container}>
            <ScreenHeaderBtn detailPage={true} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {isLoading ? (
                    <ActivityIndicator size="large" color={colors.primary} />
                ) : error ? (
                    <Text style={{ color: colors.text }}>Something went wrong</Text>
                ) : !meditationItem ? (
                    <Text style={{ color: colors.text }}>No data available</Text>
                ) : (
                    <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                        <MeditationTopDisplay
                            meditationImage={meditationItem.image}
                            meditationTitle={meditationItem.title}
                            duration={meditationItem.duration}
                            target={meditationItem.target}
                        />
                        <Tabs
                            tabs={tabs}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                        {displayTabContent()}
                    </View>
                )}
            </ScrollView>

            <Footer data={meditationItem} />
        </SafeAreaView>
    );
};

const styles = (themeColors) => StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: themeColors.backgroundColor, 
    },
    
    specificsContainer: {
        
        
        marginVertical:SIZES.small,
        justifyContent:"center",
    },
    specificsTitle: {
        marginVertical:SIZES.xxSmall,
        fontWeight:"semibold",
        fontFamily:FONT.bold,
        fontSize:SIZES.medium,
        color:themeColors.text,
    },
    pointsContainer: {
        marginTop: SIZES.xSmall,
    },
    pointWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: SIZES.xSmall / 2,
    },
    pointDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: SIZES.small,
    },
    pointText: {
        fontSize: SIZES.small,
    },
});

export default MeditationDetails;