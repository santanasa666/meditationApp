import { View, Text, StyleSheet } from "react-native";
import { SIZES, FONT } from "../constants";
import { useTheme } from "../app/context/ThemeContext";

const Welcome = ({ userDetails }) => {
    console.log("userDetails", userDetails?.userName);

    const { colors } = useTheme();

    const themedStyles = styles(colors);

    return (
        <>
        <View style={themedStyles.container} testID="styles.container">
            <Text style={themedStyles.userName}>Hello {userDetails?.userName}!</Text>
            <Text style={themedStyles.welcomeMessage}>Find your perfect meditation</Text>
        </View>
        </>
    );
    
    

    
};
const styles = (themeColors) => StyleSheet.create({
        container:{
            width:"100%",
        },
        userName:{
            fontFamily: FONT.regular,
            fontSize: SIZES.medium,
            color: themeColors.gray,
        },

        welcomeMessage:{

            fontFamily: FONT.bold,
            fontSize:SIZES.xLarge,
            color: themeColors.text,
            marginTop:2

        },

        searchContainer: {
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"row",
            marginTop: SIZES.large,
            height: 50,
        },

        searchWrapper: {
            flex: 1,
            backgroundColor: themeColors.white,
            marginRight: SIZES.small,
            justifyContent: "center",
            alignItems:"center",
            borderRadius: SIZES.medium,
            height: "100%",

        },
        searchInput: {
            fontFamily: FONT.regular,
            width:"100%",
            height:"100%",
            paddingHorizontal: SIZES.medium,
        },
        searchBtn:{
            width:50,
            height:"100%",
            backgroundColor:themeColors.tertiary,
            borderRadius: SIZES.medium,
            justifyContent:"center",
            alignItems:"center",
        },
        searchBtnImage:{
            width:"50%",
            height:"50%",
            tintColor: themeColors.white,
        },
        tabsContainer: {
            width:"100%",
            marginTop: SIZES.medium,
        }

    });

export default Welcome;