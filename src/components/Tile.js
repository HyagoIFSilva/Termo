import React, { useEffect, useRef } from 'react';
import { Text, Animated, StyleSheet, View } from 'react-native';

export const Tile = ({ digito, estilo, index, isRevealed }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isRevealed) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        delay: index * 200,
        useNativeDriver: true,
      }).start();
    }
  }, [isRevealed]);

  const frontAnimatedStyle = {
    transform: [
      {
        rotateY: animatedValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: ['0deg', '90deg', '90deg'],
        }),
      },
    ],
  };

  const backAnimatedStyle = {
    transform: [
      {
        rotateY: animatedValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: ['90deg', '90deg', '0deg'],
        }),
      },
    ],
  };

  return (
    <View style={styles.tileContainer}>
      <Animated.View style={[styles.caixaBase, styles.caixaFrente, frontAnimatedStyle]}>
        <Text style={styles.textoCaixa}>{digito}</Text>
      </Animated.View>
      <Animated.View style={[styles.caixaBase, styles.caixaTras, estilo, backAnimatedStyle]}>
        <Text style={styles.textoCaixa}>{digito}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    marginHorizontal: 4,
    aspectRatio: 1,
  },
 
  caixaBase: {
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  caixaFrente: {
    borderColor: '#3a3a3c',
  },
  caixaTras: {
    borderColor: '#3a3a3c',
  },
  textoCaixa: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});