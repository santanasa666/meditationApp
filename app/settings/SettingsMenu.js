import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import ScreenHeaderBtn from '../../components/ScreenHeaderBtn';
import { useTheme } from '../context/ThemeContext';


const SettingsScreen = ({ navigation, userDetails }) => {
  const { colors } = useTheme();

    const themedStyles = styles(colors);
    
    console.log("userDetails", userDetails?.userName);
    const handleLogout = () => {
    // Implement logout logic here
  };
    

  return (
    <SafeAreaView style={[themedStyles.container, { backgroundColor: colors.backgroundColor }]}>
      
      <ScreenHeaderBtn/>
    <ScrollView style={themedStyles.container}>
      <View style={themedStyles.header}>
        <Text style={themedStyles.headerText}>Hello, {userDetails?.userName}!</Text>
      </View>
      <TouchableOpacity style={themedStyles.menuItem}>
        <Feather name="settings" size={24} color="#000" />
        <Text style={themedStyles.menuText}>Account Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={themedStyles.menuItem}>
        <Feather name="notifications" size={24} color="#000" />
        <Text style={themedStyles.menuText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={themedStyles.menuItem}>
        <Feather name="info" size={24} color="#000" />
        <Text style={themedStyles.menuText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={themedStyles.menuItem} onPress={handleLogout}>
        <Feather name="logout" size={24} color="#000" />
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
    alignItems: 'center',
    backgroundColor: '#007aff',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    marginLeft: 16,
    fontSize: 18,
  },
});

export default SettingsScreen;
