import React from 'react';
import { ScrollView, StyleProp, StyleSheet, View } from 'react-native';
import { StyleTypes } from '../../../types';

interface ILayout {
  children: React.ReactNode
  isScrollView?: boolean
  style: StyleProp<StyleTypes>
}

export const Layout = (prop: ILayout) => {
  return (
    <View
      style={[prop.style, styles.layout]}
    >
      {prop.isScrollView ?? false
        ? <ScrollView>{prop.children}</ScrollView>
        : prop.children}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    width: '100%',
    paddingTop: 40,
    paddingHorizontal: 20,
  }
})