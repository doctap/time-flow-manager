import React from 'react';
import { StyleSheet, Pressable, DimensionValue, Text } from 'react-native';
import { PoppinsMedium, GStyleElementKeys } from '../../../../styles';

interface IButtonPressable<TStyles> {
  width?: DimensionValue
  style?: TStyles
  onPress: () => void
  span: string
  isJustSpan?: boolean
}

export const ButtonPressable = <T extends {}>({ width, style, onPress, span, isJustSpan }: IButtonPressable<T>) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...style,
        width
      }}
    >
      <Text style={{
        ...styles.span,
        color: isJustSpan ? '#363942' : '#fff'
      }}>
        {span}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  span: {
    fontFamily: PoppinsMedium,
    fontSize: 16
  }
});
