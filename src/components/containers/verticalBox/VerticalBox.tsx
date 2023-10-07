import React from 'react';
import { View, StyleSheet, DimensionValue } from 'react-native';

interface IVerticalBox {
  children: React.ReactNode
  gap?: number
  width?: DimensionValue
  alignItems: 'flex-start' | 'center' | 'flex-end'
}

export const VerticalBox = ({gap, width = '100%', alignItems, children}: IVerticalBox) => {
  return (
    <View
      style={{
        ...styles.vertical,
        gap,
        width,
        alignItems
      }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  vertical: {
    flexDirection: 'column',
  }
});
