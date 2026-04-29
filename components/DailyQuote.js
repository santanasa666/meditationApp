import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { COLORS } from "../constants";

const DailyQuote = () => {
    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchQuote = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/quotes/random');
            if (response.ok) {
                const data = await response.json();
                setQuote(data.quote);
            } else {
                console.error('Error fetching quote:', response.status);
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
        <View style={styles.container}>
            {loading ? (
                
                <ActivityIndicator size="small" color={COLORS.primary} />
            ) : (
                <Text style={styles.quoteText}>{quote ? `"${quote}"` : "Loading quote..."}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15, 
        marginVertical: 10,
    },
    quoteText: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        color: COLORS.primary,
    },
});

export default DailyQuote;