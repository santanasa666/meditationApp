import { StyleSheet } from "react-native";
import { SIZES, FONT } from "../../constants";


const createStyles = (themeColors) => StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0,
        padding: SIZES.small,
        backgroundColor: themeColors.backgroundColor || "#FFFFFF", 
        justifyContent: "flex-start", 
        alignItems: "center",
        gap: 10, 
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: themeColors.gray2,
    },
    likeBtn: {
        width: 55,
        height: 55,
        borderWidth: 3,
        borderColor: themeColors.gray1,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    longBtn: {
        flex: 1,
    },
    likeBtnImage: {},
    applyBtn: {
        flex: 1,
        backgroundColor: themeColors.primary,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: SIZES.medium,
        borderRadius: SIZES.medium,
        height: 55,
    },
    applyBtnText: {
        fontSize: SIZES.medium,
        color: themeColors.white, 
        fontFamily: FONT.bold,
        padding: SIZES.small
    },
});

export default createStyles;