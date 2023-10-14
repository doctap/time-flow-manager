import React, { ReactNode } from 'react';
import { Pressable } from 'react-native';

interface IIconPressable {
  onPress: () => void
  icon: ReactNode
}

export const IconPressable = ({ onPress, icon }: IIconPressable) => {
  return (
    <Pressable onPress={onPress}>
      {icon}
    </Pressable>
  );
};