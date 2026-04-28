import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        marginVertical: SIZES.medium,
        justifyContent:"center",
        alignItems:"center",
    },

    logoBox: {
        width: "100%",
        height:250,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.white,
        borderRadius:SIZES.large,
        shadowColor:COLORS.gray2,

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
        fontSize:SIZES.medium - 2,
        color: COLORS.primary,
        fontFamily: FONT.medium,
    },
    durationImage: {
        
    },
    durationName: {
        fontSize: SIZES.medium - 2,
        color:COLORS.gray,
        fontFamily: FONT.regular,
        marginLeft:2,
    },
}); 

export default styles;