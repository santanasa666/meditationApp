import React from 'react';
import { View, Text, Switch, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { SIZES } from '../../constants';
import ScreenHeaderBtn from '../../components/ScreenHeaderBtn';

const Settings = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
      
      <ScreenHeaderBtn/>
      <View style={styles.settingRow}>
        <Text style={[styles.text, { color: colors.text }]}>
          Dark Mode
        </Text>
        
        <Switch
          trackColor={{ false: '#767577', true: '#DE25EC' }} // Using your primary color
          thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkMode}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    fontSize: SIZES.large,
    fontWeight: '500',
  },
});

export default Settings;