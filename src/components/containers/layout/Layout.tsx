import React from 'react';
import { ScrollView, StyleProp, View } from 'react-native';
import { StyleTypes } from '../../../types';

interface ILayout {
  children: React.ReactNode
  isScrollView?: boolean
  style: StyleProp<StyleTypes>
}

export const Layout = (prop: ILayout) => {
  return (
    <View
      style={prop.style}
    >
      {prop.isScrollView ?? false
        ? <ScrollView>{prop.children}</ScrollView>
        : prop.children}
    </View>
  );
};