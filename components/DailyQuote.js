import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useTheme } from "../app/context/ThemeContext";


const DailyQuote = () => {
    const { colors } = useTheme(); // This provides the 'colors' object
    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(false);

    // 1. Generate the themed styles by calling the function
    const themedStyles = styles(colors); 

    const fetchQuote = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/quotes/random');
            if (response.ok) {
                const data = await response.json();
                setQuote(data.quote);
            }
        } catch (error) {
            console.error('Error fetching quote:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        // 2. Use 'themedStyles' instead of 'styles'
        <View style={themedStyles.container}>
            {loading ? (
                <ActivityIndicator size="small" color={colors.primary} />
            ) : (
                <Text style={themedStyles.quoteText}>
                    {quote ? `"${quote}"` : "Loading quote..."}
                </Text>
            )}
        </View>
    );
};

// 3. Fix the parameter and variable naming consistency
const styles = (themeColors) => StyleSheet.create({
    container: {
        justifyContent: 'center',
        borderWidth: 1,
        // Removed quotes: 'color.gray' would be a string, themeColors.gray is a variable
        borderColor: themeColors.gray2 || '#ccc', 
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15, 
        marginVertical: 10,
        backgroundColor: themeColors.backgroundColor,
    },
    quoteText: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        // Use the parameter name 'themeColors'
        color: themeColors.text || themeColors.quote, 
    },
});

export default DailyQuote;