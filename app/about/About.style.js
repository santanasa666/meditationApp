import { StyleSheet } from "react-native";

import { FONT, SIZES } from "../../constants";



const styles= (themeColors) => StyleSheet.create({

    container:{
        marginVertical:SIZES.small,
        justifyContent:"center",
        
    },
    headText:{
        
        marginBottom:SIZES.xxSmall,
        fontWeight:"semibold",
        fontFamily:FONT.bold,
        fontSize:SIZES.medium,
        color:themeColors.text,
    },

    contentBox:{

    },

    contentText:{
        fontFamily:FONT.regular,
        fontSize:SIZES.small,
        color:themeColors.gray,
    },



});

export default styles;