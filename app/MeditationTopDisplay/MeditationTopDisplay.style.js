import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = (themeColors) => StyleSheet.create({
    container:{
        marginVertical: SIZES.small,
        justifyContent:"center",
        alignItems:"center",
    },

    logoBox: {
        width: "100%",
        height:200,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:themeColors.white,
        borderRadius:SIZES.large,
        shadowColor:themeColors.gray2,

    },

    logoImage:{
        width:"100%",
        borderRadius: SIZES.large,
        height:"100%",
    },

    meditationTitleBox:{
        marginTop:SIZES.small,
    },
    meditationTitle:{
        fontSize:SIZES.medium,
        color: themeColors.text,
        fontFamily: FONT.medium,
    },
    durationImage: {
        
    },
    durationName: {
        fontSize: SIZES.medium - 2,
        color:themeColors.gray,
        
        
        
    },
    meditationName:{
        backgroundColor:themeColors.gray3,
        paddingTop:5,
        paddingBottom:6,
        paddingHorizontal:SIZES.xSmall,
        borderRadius:SIZES.medium,
        marginRight:SIZES.xxSmall,

    },
    meditationInfoBox:{
        paddingVertical: SIZES.small / 2,
        width: "100%",
        gap:SIZES.small,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        
    },
    durationBox:{
        flexDirection:"row",
        justifyContent:"flex-start",
        gap:4,
        alignContent:"center",
        alignItems:"center",
    },
}); 

export default styles;