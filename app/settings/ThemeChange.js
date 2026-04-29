import { Text, SafeAreaView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { COLORS, FONT, SIZES, SHADOWS, DARK_COLORS } from "../../constants";
import { useTheme } from "../context/ThemeContext";
import { Switch, View } from "react-native";
import { TouchableOpacity } from "react-native";
import ScreenHeaderBtn from "../../components/ScreenHeaderBtn";

const ThemeChange = () => {
    const { isDarkMode, toggleTheme, colors } = useTheme();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
            <View
              style={{
                justifyContent: "space-between",
                padding: SIZES.medium,
                borderRadius: SIZES.small,
                backgroundColor: colors.lightWhite,
                ...SHADOWS.medium,
                shadowColor: colors.white,
                marginVertical: SIZES.medium,
                marginHorizontal: SIZES.medium,
              }}
            >
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: SIZES.medium,
                      fontFamily: "DMBold",
                      marginHorizontal: SIZES.medium,
                      marginVertical: SIZES.small,
                    }}
                  >
                    {isDarkMode ? "Dark Mode" : "Light Mode"}
                  </Text>

                  <Switch
                    trackColor={{ false: '#767577', true: '#DE25EC' }}
                    thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
                    value={isDarkMode}
                    onValueChange={toggleTheme}
                  />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ThemeChange;