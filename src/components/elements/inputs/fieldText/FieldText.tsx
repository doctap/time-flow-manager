import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface IFieldText {
  onHandler: (t: string) => void
  placeholder?: string
}

export const FieldText = (prop: IFieldText) => {
  const [value, setValue] = useState('');

  const onChange = (t: string) => {
    prop.onHandler(t);
    setValue(t);
  }

  return (
    <TextInput
      onChangeText={onChange}
      value={value}
      placeholder={prop.placeholder}
      keyboardType='default'
      inputMode='text'
    />
  );
};

const styles = StyleSheet.create({});
