import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Platform } from 'react-native';
import { COLORS } from '../constants';

const CustomInput = ({ placeholder, value, onChangeText, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View 
      style={[
        styles.inputWrapper, 
        isFocused ? styles.focusedBorder : styles.defaultBorder
      ]}
    >
      <TextInput
        style={[
          styles.input,
          // This removes the stubborn black/blue ring on Web
          Platform.OS === 'web' && { outlineStyle: 'none' }
        ]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.hintText}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        // Makes the blinking cursor pink to match!
        selectionColor={COLORS.primary}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginVertical: 5,
    borderWidth: 1.5,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    // We keep the transition so it looks smooth
    transitionProperty: 'border-color',
    transitionDuration: '0.2s',
  },
  defaultBorder: {
    borderColor: COLORS.gray2,
  },
  focusedBorder: {
    // We use !important-style logic by ensuring this color 
    // is applied to the WRAPPER, not just the input
    borderColor: COLORS.primary,
    borderWidth:2, 
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
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