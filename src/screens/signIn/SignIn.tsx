import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { HorizontalBox, Layout, VerticalBox } from '../../components/containers';
import { PoppinsMedium, gStyleStatic } from '../../styles';
import { AuthorizeField, ButtonPressable } from '../../components/elements';
import { Hr } from '../../components/decarations';

export const SignIn = () => {
  return (
    <Layout style={extensionStyles}>
      <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium' }}>Sign In</Text>

      <VerticalBox alignItems='center' gap={20}>
        <AuthorizeField placeholder='Email' fieldType='email' style={gStyleStatic.input} onHandler={() => 0} />
        <AuthorizeField placeholder='Password' fieldType='password' style={gStyleStatic.input} onHandler={() => 0} />

        <HorizontalBox width='100%' >
          <ButtonPressable span='Forgot you password?' isJustSpan onPress={() => console.log('pree')} />
          <ButtonPressable span='Log In' style={gStyleStatic.primaryButton} onPress={() => console.log('pree')} />
        </HorizontalBox>

        <Hr />
        <Text style={styles.text}>You can sign in with</Text>
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
