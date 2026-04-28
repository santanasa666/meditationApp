import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { View } from "react-native-web";
import { COLORS, SIZES } from "../constants";
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from "expo-router";
import icons from "../constants/icons";

const ScreenHeaderBtn = ({ detailPage, handleShare, iconName }) => {
    console.log(detailPage);

    const router = useRouter();
    return (
        <>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.btnLogo} onPress={() => router.push("/home")}>
                    <Image source={icons.logoH} style={styles.LogoImage} />
                </TouchableOpacity>

                {detailPage ?
                    <>
                        <TouchableOpacity style={styles.btnContainer} onPress={handleShare}>
                            <Feather iconName="share" />
                        </TouchableOpacity>
                    </>
                    :
                    <>
                        <TouchableOpacity style={styles.btnContainer} onPress={() => router.push("/settings")}>
                            <Feather name="settings" style={styles.icon} size={20

                            } color={COLORS.primary} />
                        </TouchableOpacity>
                    </>
                }
            </View></>
    );
};

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        paddingHorizontal: 10, 
        width: '100vw', 
        backgroundColor: COLORS.white,
        borderBottomWidth:1,
        borderBottomColor:COLORS.gray2,
        paddingVertical:5,
      },
    image: {
        width: 30, 
        height: 30,
        resizeMode: 'contain',
      },
      LogoImage: {
        width: 70, 
        height: "100%",
        resizeMode: 'contain',
      },
      btnLogo: {
        width: 40,
        height: 40,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        marginLeft:20,
      },
    icon: {
        margin:"auto",
    },
    btnContainer: {
        width: 30,
        height: 30,
        backgroundColor: COLORS.lightMain,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
      },
})


export default ScreenHeaderBtn;