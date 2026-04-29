import { StyleSheet } from "react-native";

import { FONT, SIZES, SHADOWS } from "../../constants";

const styles = (themeColors) => StyleSheet.create({

    container:{
        marginTop:SIZES.xxxSmall,
        marginBottom:SIZES.small / 2 ,
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:themeColors.gray2,
    },
    btn: (name, activeTab) => ({

        paddingHorizontal: SIZES.xLarge,
        
        borderRadius: SIZES.medium,
        marginLeft:2,
        ...SHADOWS.medium,
        shadowColor: themeColors.white,
    }),
    btnText: (name, activeTab) => ({
        fontFamily:name === activeTab ? FONT.bold : FONT.regular,
        
        fontSize: SIZES.medium,
        color: name === activeTab ? themeColors.primary : themeColors.gray,
        paddingBottom:SIZES.xSmall,
        borderBottomWidth: name === activeTab ? 5 : 0,
        borderBottomColor:themeColors.primary,
    }),




});

export default styles;