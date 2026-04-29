import { Image, TouchableOpacity, StyleSheet, View } from "react-native"; 
import { COLORS, SIZES } from "../constants";
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from "expo-router";
import icons from "../constants/icons";
import { useTheme } from "../app/context/ThemeContext";

const ScreenHeaderBtn = ({ detailPage, handleShare }) => {
    const router = useRouter();
    const { colors } = useTheme(),

    return (
        <View style={styles.btn}>
            <TouchableOpacity 
                style={styles.btnLogo} 
                onPress={() => router.push("/home")}
            >
                <Image source={icons.logoH} style={styles.LogoImage} />
            </TouchableOpacity>

            {detailPage ? (
                <TouchableOpacity style={styles.btnContainer} onPress={handleShare}>
                    <Feather name="share-2" size={20} color={COLORS.primary} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity 
                    style={styles.btnContainer} 
                    onPress={() => {
                        console.log("Navigating to settings..."); // Debug log
                        router.push("/settings/Settings");
                    }}
                >
                    <Feather name="settings" size={20} color={COLORS.primary} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        paddingHorizontal: 10, 
        width: '100%', 
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray2,
        paddingVertical: 5,
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
        backgroundColor: COLORS.lightMain,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
});

export default ScreenHeaderBtn;