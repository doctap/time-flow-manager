import React from 'react';
import { Text, View, StyleSheet, DimensionValue } from 'react-native';

interface IHorizontalBox {
  children: React.ReactNode
  width?: DimensionValue
}

export const HorizontalBox = ({children, width}: IHorizontalBox) => {
  return (
    <View style={{
      ...styles.horizontal,
      width
    }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    justifyContent:  'space-between',
    alignItems: 'center'
  }
});
