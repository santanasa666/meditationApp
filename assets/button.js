import React, { useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { COLORS } from '../constants';

const VolumetricButton = ({ title, onPress }) => {
  
  const animatedValue = useRef(new Animated.Value(0)).current;

  const pushButton = () => {
    Animated.spring(animatedValue, {
      toValue: 1, 
      useNativeDriver: true,
      bounciness: 10,
    }).start();
  };

  const releaseButton = () => {
    Animated.spring(animatedValue, {
      toValue: 0,
      useNativeDriver: true,
      bounciness: 10,
    }).start();
  };


  
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
      
      <View style={styles.bottomLayer} />

     
      <Animated.View style={[styles.topLayer, { transform: [{ translateY }] }]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,

    
  },
  bottomLayer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 44, 
    backgroundColor: COLORS.primaryDark, 
    borderRadius: 12,
  },
  topLayer: {
    width: '100%',
    height: 44,
    backgroundColor: COLORS.primary, 
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