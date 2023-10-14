import React from 'react';
import { StyleSheet, Pressable, DimensionValue, Text } from 'react-native';
import { PoppinsMedium } from '../../../../styles';

type BtnModel = 'primary' | 'secondary';

interface IButtonPressable<TStyles> {
  width?: DimensionValue
  style?: TStyles
  onPress: () => void
  span: string
  model: BtnModel,
}

export const ButtonPressable = <T extends {}>({ width, style, onPress, span, model }: IButtonPressable<T>) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...style,
        ...styles[model],
        width
      }}
    >
      <Text style={{
        ...styles.span,
        ...styles[`${model}Span`]
      }}>
        {span}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  span: {
    fontFamily: PoppinsMedium,
    fontSize: 18
  },
  primarySpan: {
    color: '#fff'
  },
  secondarySpan: {
    color: '#363942'
  },
  primary: {
    paddingHorizontal: 30,
    height: 43,
    borderRadius: 10,
    justifyContent: 'center'
  },
  secondary: {},
});
