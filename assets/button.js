import React, { useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { COLORS } from '../constants';

const VolumetricButton = ({ title, onPress }) => {
  // 1. Create an animated value for the vertical offset
  const animatedValue = useRef(new Animated.Value(0)).current;

  const pushButton = () => {
    Animated.spring(animatedValue, {
      toValue: 1, // Moves the button down
      useNativeDriver: true,
      bounciness: 10,
    }).start();
  };

  const releaseButton = () => {
    Animated.spring(animatedValue, {
      toValue: 0, // Returns the button to original position
      useNativeDriver: true,
      bounciness: 10,
    }).start();
  };

  // 2. Map the animated value to a pixel translation
  // If the 'thickness' is 6, we move the top layer by 6 pixels
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 6], 
  });

  return (
    <Pressable
      onPressIn={pushButton}
      onPressOut={releaseButton}
      onPress={onPress}
      style={styles.container}
    >
      {/* The Bottom Layer (The "Volume") */}
      <View style={styles.bottomLayer} />

      {/* The Top Layer (The Moving Surface) */}
      <Animated.View style={[styles.topLayer, { transform: [{ translateY }] }]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: 50,
  },
  bottomLayer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 44, // Slightly shorter than container to allow "push" room
    backgroundColor: COLORS.primaryDark, // Darker shade
    borderRadius: 12,
  },
  topLayer: {
    width: '100%',
    height: 44,
    backgroundColor: COLORS.primary, // Main color
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default VolumetricButton;