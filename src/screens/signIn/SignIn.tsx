import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { HorizontalBox, Layout, VerticalBox } from '../../components/containers';
import { PoppinsMedium, gStyleStatic } from '../../styles';
import { AuthorizeField, ButtonPressable } from '../../components/elements';
import { Hr } from '../../components/decarations';

export const SignIn = () => {
  return (
    <Layout style={extensionStyles}>
      <VerticalBox alignItems='center' gap={20}>
        <AuthorizeField placeholder='Email' fieldType='email' style={gStyleStatic.input} onHandler={() => 0} />
        <AuthorizeField placeholder='Password' fieldType='password' style={gStyleStatic.input} onHandler={() => 0} />

        <HorizontalBox width='100%' >
          <ButtonPressable onPress={() => console.log('pree')} model='secondary' span='Forgot you password?' />
          <ButtonPressable style={gStyleStatic.primaryBtn} onPress={() => console.log('pree')} model='primary' span='Log In'  />
        </HorizontalBox>

        <Hr />
        <Text style={[styles.text]}>You can sign in with</Text>
      </VerticalBox>
    </Layout>
  );
};

const styles = StyleSheet.create({
  custom: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: PoppinsMedium
  }
})

const extensionStyles = StyleSheet.compose(gStyleStatic.screen, styles.custom)
