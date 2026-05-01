import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Alert, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import ScreenHeaderBtn from '../../components/ScreenHeaderBtn';
import { useTheme } from '../context/ThemeContext';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { SIZES } from '../../constants';

import { getUserDetails, clearUserDetails, removeData } from '../utils/localStorage';


const SettingsScreen = ({ navigation }) => {
  console.log("!!! SETTINGS SCREEN COMPONENT RENDERED !!!");
  const [userDetails, setUserDetails] = useState(null);
  const router = useRouter();
  const { colors } = useTheme();
  const themedStyles = styles(colors);


  useEffect(() => {
    const fetchUserDetails = async () => {
      console.log("WE'RE FETCHING USER DETAILS");
      try {
        const storedDetails = await getUserDetails();
        if (storedDetails) {
          setUserDetails(storedDetails);
        }

        console.log("WE FETCHED THE DETAILS SUCCESSFULLY");
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = async () => {
    console.log("We're going to logout");

    const logoutAction = async () => {
      try {
        await clearUserDetails();
        await removeData('userToken');
        router.replace("/login");
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    // Check if the app is running on Web
    if (Platform.OS === 'web') {
      const confirmed = window.confirm("Are you sure you want to log out?");
      if (confirmed) {
        await logoutAction();
      }
    } else {
      // Standard Mobile Alert
      Alert.alert(
        "Logout",
        "Are you sure you want to log out?",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Logout", style: "destructive", onPress: logoutAction }
        ]
      );
    }
  };


  return (
    <SafeAreaView style={[themedStyles.container, { backgroundColor: colors.gray3 }]}>

      <ScreenHeaderBtn />
      <ScrollView style={themedStyles.container}>
        <View style={themedStyles.header}>
          <Text style={themedStyles.headerText}>Hello, {userDetails?.userName}!</Text>
          <Text style={themedStyles.headerQuestion}>Would you like to change any settings?</Text>
        </View>
        <TouchableOpacity style={themedStyles.menuItem} onPress={() => router.push("/settings/Settings")}>
          <Feather name="settings" size={24} color={colors.primary} style={themedStyles.icoBtn} />
          <Text style={themedStyles.menuText}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={themedStyles.menuItem} onPress={() => router.push("/settings/Favorites")}>
          <Feather name="heart" size={24} color={colors.primary} style={themedStyles.icoBtn} />
          <Text style={themedStyles.menuText}>My Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={themedStyles.menuItem} onPress={() => router.push("/settings/DailyReminders")}>
          <Feather name="clock" size={24} color={colors.primary} style={themedStyles.icoBtn} />
          <Text style={themedStyles.menuText}>Reminders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={themedStyles.menuItemLogout} onPress={handleLogout}>
          <Feather name="arrow-left" size={24} color={colors.error} style={themedStyles.icoBtnLogout} />
          <Text style={themedStyles.menuText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = (themeColors) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 24,
    alignItems: 'left',

  },
  headerQuestion: {
    color: themeColors.text,
    fontWeight: "500",
    fontSize: SIZES.xMedium,
    lineHeight: SIZES.large,
  },
  headerText: {
    fontSize: SIZES.medium,
    color: themeColors.gray,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.xxSmall,
    paddingLeft: SIZES.xxSmall,
    borderRadius: SIZES.medium,
    backgroundColor: themeColors.lightBG,
    marginBottom: SIZES.xSmall,
    borderWidth: 1,
    borderColor: themeColors.gray1,

  },
  menuItemLogout: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.xxSmall,
    paddingLeft: SIZES.xxSmall,
    borderRadius: SIZES.medium,
    backgroundColor: themeColors.errorBg,
    marginBottom: SIZES.xSmall,
    borderWidth: 1.6,
    borderColor: themeColors.error,
  },
  menuText: {
    marginLeft: 16,
    fontSize: SIZES.medium,
    color: themeColors.text,
    fontWeight: "400",
  },
  icoBtnLogout: {
    backgroundColor: themeColors.errorIcoBg,
    padding: SIZES.xxSmall,
    borderRadius: SIZES.small,
  },
  icoBtn: {
    backgroundColor: themeColors.lightMain,
    padding: SIZES.xxSmall,
    borderRadius: SIZES.small,

  },
});

export default SettingsScreen;
