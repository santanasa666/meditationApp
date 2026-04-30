import { Image, TouchableOpacity, StyleSheet, View } from "react-native"; 
import { SIZES } from "../constants"; 
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from "expo-router";
import icons from "../constants/icons";
import { useTheme } from "../app/context/ThemeContext";

const ScreenHeaderBtn = ({ detailPage, handleShare }) => {
   const { colors } = useTheme();
   
   const router = useRouter();
    

    const themedStyles = styles(colors);

    return (
        <View style={themedStyles.btn}>
            <TouchableOpacity 
                style={themedStyles.btnLogo} 
                onPress={() => router.push("/home")}
            >
                <Image source={icons.logoH} style={themedStyles.LogoImage} />
            </TouchableOpacity>

            {detailPage ? (
                <TouchableOpacity 
                    style={[themedStyles.btnContainer, { backgroundColor: colors.lightMain }]} 
                    onPress={handleShare}
                >
                    <Feather name="share-2" size={20} color={colors.primary} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity 
                    style={[themedStyles.btnContainer, { backgroundColor: colors.lightMain }]} 
                    onPress={() => {
                        console.log("Navigating to settings..."); 
                        router.push("/settings/SettingsMenu");
                    }}
                >
                    <Feather name="settings" size={20} color={colors.primary} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = (themeColors) => StyleSheet.create({
    btn: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        paddingHorizontal: 10, 
        width: '100%', 
        borderBottomWidth: 1,
        paddingVertical: 5,
        backgroundColor: themeColors.backgroundColor,
        borderBottomColor: themeColors.gray2,
    },
    LogoImage: {
        width: 70, 
        height: "100%",
        resizeMode: 'contain',
    },
    btnLogo: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
    },
    btnContainer: {
        width: 40,
        height: 40,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
});

export default ScreenHeaderBtn;