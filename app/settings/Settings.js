import React from 'react';
import { View, Text, Switch, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { SIZES } from '../../constants';
import ScreenHeaderBtn from '../../components/ScreenHeaderBtn';
import ThemeChange from './ThemeChange';


const Settings = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme();
  const themedStyles = styles(colors);
  return (
    <SafeAreaView style={[themedStyles.container, { backgroundColor: colors.backgroundColor }]}>
      
      <ScreenHeaderBtn/>
      <View style={themedStyles.menuItem}>
      <View style={themedStyles.settingRow}>
        <Text style={[styles.text, { color: colors.white }]}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </Text>
        
        <Switch
          trackColor={{ false: '#767577', true: '#DE25EC' }} 
          thumbColor={isDarkMode ? '#ffffff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkMode}
          activeThumbColor="#ffccfa"
        />
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = (themeColors) => StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.small,
  },
  text: {
    fontSize: SIZES.medium,
    color:themeColors.text,
    fontWeight:"400",
  },
  menuItem:{
    marginHorizontal:SIZES.small,
    backgroundColor:themeColors.text,
    marginVertical:SIZES.small,
    paddingVertical:SIZES.small,
    paddingHorizontal:SIZES.xSmall,
    borderRadius:SIZES.medium,
    
  },
});

export default Settings;