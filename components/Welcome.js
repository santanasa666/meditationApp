import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../constants";

const Welcome = ({ userDetails }) => {
    console.log("userDetails", userDetails?.userName);
    return (
        <>
        <View style={styles.container} testID="styles.container">
            <Text style={styles.userName}>Hello {userDetails?.userName}!</Text>
            <Text style={styles.welcomeMessage}>Find your perfect meditation</Text>
        </View>
        </>
    );
    
    

    
};
const styles = StyleSheet.create({
        container:{
            width:"100%",
        },
        userName:{
            fontFamily: FONT.regular,
            fontSize: SIZES.large,
            color: COLORS.gray2,
        },

        welcomeMessage:{

            fontFamily: FONT.bold,
            fontSize:SIZES.xLarge,
            color: COLORS.text,
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
            backgroundColor: COLORS.white,
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
            backgroundColor:COLORS.tertiary,
            borderRadius: SIZES.medium,
            justifyContent:"center",
            alignItems:"center",
        },
        searchBtnImage:{
            width:"50%",
            height:"50%",
            tintColor: COLORS.white,
        },
        tabsContainer: {
            width:"100%",
            marginTop: SIZES.medium,
        }

    });

export default Welcome;