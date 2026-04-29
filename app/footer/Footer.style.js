import { StyleSheet } from "react-native";
import { SIZES, FONT } from "../../constants";


const createStyles = (themeColors) => StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: SIZES.small,
        // Use the dynamic color passed into the function
        backgroundColor: themeColors.backgroundColor || "#FFFFFF", 
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: themeColors.gray2,
    },
    likeBtn: {
        width: 55,
        height: 55,
        borderWidth: 3,
        // Replace static COLORS.gray1 with dynamic colors.gray1
        borderColor: themeColors.gray1,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    likeBtnImage: {},
    applyBtn: {
        flex: 1,
        // Replace static COLORS.primary with dynamic colors.primary
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
        // Fixed typo: Changed 'color.white' to 'colors.white'
        color: themeColors.white, 
        fontFamily: FONT.bold,
        padding: SIZES.small
    },
});

export default createStyles;