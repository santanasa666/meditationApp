import { View, Text } from "react-native";

import styles from "./About.style";
import { useTheme } from "../context/ThemeContext";

const About = ({ info, title }) => {

    const { colors } = useTheme(); 

    const themedStyles = styles(colors);

    return (
        <View style={themedStyles.container}>
            <Text style={themedStyles.headText}>About {title}:</Text>
            <View style={themedStyles.contentBox}>
                <View style={themedStyles.contentText}>{info}</View>
            </View>
        </View>
    );
};

export default About;