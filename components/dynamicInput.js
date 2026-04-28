import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Platform } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../constants';

const CustomInput = ({ iconName, placeholder, value, onChangeText, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  // Theme Colors
  const activeColor = COLORS.primary; // Pink
  const inactiveColor = COLORS.gray; // Gray
  const borderColor = isFocused ? activeColor : COLORS.gray2;

  return (
    <View style={[styles.inputWrapper, { borderColor: borderColor }]}>
      {/* Feather Icon */}
      <Feather 
        name={iconName} 
        size={20} 
        color={isFocused ? activeColor : inactiveColor} 
        style={styles.icon} 
      />

      <TextInput
        style={[
          styles.input,
          // Eliminates the default browser focus ring
          Platform.OS === 'web' && { outlineStyle: 'none' }
        ]}
        placeholder={placeholder}
        placeholderTextColor={inactiveColor}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        selectionColor={activeColor}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    borderStyle: 'solid',
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: 50,
    color: COLORS.secondary,
    width: '100%',
    // Extra insurance for web browsers
    ...Platform.select({
      web: {
        outlineWidth: 0,
      },
    }),
  },
});

export default CustomInput;