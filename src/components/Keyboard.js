
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const keys = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['ENTER', '0', '⌫'],
];

export const Keyboard = ({ onKeyPress }) => {
  return (
    <View style={styles.keyboard}>
      {keys.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((key) => {
            const isSpecialKey = key === 'ENTER' || key === '⌫';
            return (
              <Pressable
                key={key}
                style={[styles.key, isSpecialKey && styles.specialKey]}
                onPress={() => onKeyPress(key)}
              >
                {key === '⌫' ? (
                  <Ionicons name="backspace-outline" size={scale(24)} color="white" />
                ) : (
                  <Text style={styles.keyText}>{key}</Text>
                )}
              </Pressable>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    width: '100%',
    paddingBottom: verticalScale(10),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: verticalScale(8),
  },
  key: {
    backgroundColor: '#565758',
    padding: moderateScale(10),
    marginHorizontal: scale(3),
    borderRadius: moderateScale(8),
    minWidth: scale(60), 
    height: verticalScale(50), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  specialKey: {
    minWidth: scale(80),
  },
  keyText: {
    color: '#fff',
    fontSize: moderateScale(24),
    fontWeight: 'bold',
  },
});