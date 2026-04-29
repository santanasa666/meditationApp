import React from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";

import styles from "./Tabs.style";
import { SIZES } from "../../constants";

import { useTheme } from "../context/ThemeContext";


const TabButton = ({ name, activeTab, onHandleSearchType }) => {

    const { colors } = useTheme(); 

    const themedStyles = styles(colors);  

    return (
        <TouchableOpacity
            style={themedStyles.btn(name, activeTab)}
            onPress={onHandleSearchType}
        >
            <Text style={themedStyles.btnText(name, activeTab)}>{name}</Text>
        </TouchableOpacity>
    );
};

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
    const { colors } = useTheme(); 

    const themedStyles = styles(colors);  

    return (
        <View style={themedStyles.container}>
            <FlatList
                data={tabs}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TabButton
                        name={item}
                        activeTab={activeTab}
                        onHandleSearchType={() => setActiveTab(item)}
                    />
                )}
                contentContainerStyle={{ columnGap: SIZES.small / 2 }}
                keyExtractor={(item) => item}
            />
        </View>
    );
};

export default Tabs;