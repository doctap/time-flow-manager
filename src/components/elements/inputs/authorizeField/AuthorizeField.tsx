import React, { useState } from 'react';
import { DimensionValue, StyleSheet, TextInput } from 'react-native';
import { PoppinsMedium } from '../../../../styles';

type FieldType = 'email' | 'password'

interface IAuthorizeField<TStyles> {
  onHandler: (t: string) => void
  placeholder?: string
  width?: DimensionValue
  style: TStyles
  fieldType: FieldType
}

export const AuthorizeField = <T extends {}>(prop: IAuthorizeField<T>) => {
  const {onHandler, fieldType, style, placeholder, width = '100%'} = prop;
  const [value, setValue] = useState('');

  const onChange = (t: string) => {
    onHandler(t);
    setValue(t);
  }

  return (
    <TextInput
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      keyboardType={fieldType === 'email' ? 'email-address' : 'default'}
      inputMode={fieldType === 'email' ? 'email' : 'text'}
      secureTextEntry={fieldType === 'password'}
      style={{
        ...styles.input,
        ...style,
        width
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 7,
    fontSize: 16,
    borderRadius: 10,
    fontFamily: PoppinsMedium,
    elevation: 5,
    textAlign: 'center'
  }
});
