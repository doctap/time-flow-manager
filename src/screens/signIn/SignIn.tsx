import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { HorizontalBox, Layout, VerticalBox } from '../../components/containers';
import { PoppinsMedium, gStyleStatic } from '../../styles';
import { AuthorizeField, ButtonPressable, IconPressable } from '../../components/elements';
import { Hr } from '../../components/decarations';

export const SignIn = () => {
  // const icon = <Image source={require('../../../assets/logos/logo-google.png')} />;
  
  return (
    <Layout style={[gStyleStatic.screen, styles.layout]}>
      <VerticalBox alignItems='center' gap={20}>
        <AuthorizeField placeholder='Email' fieldType='email' style={gStyleStatic.input} onHandler={() => 0} />
        <AuthorizeField placeholder='Password' fieldType='password' style={gStyleStatic.input} onHandler={() => 0} />

        <HorizontalBox width='100%'>
          <ButtonPressable onPress={() => console.log('Forgot you password?')} model='secondary' span='Forgot you password?' />
          <ButtonPressable style={gStyleStatic.primaryBtn} onPress={() => console.log('Log In')} model='primary' span='Log In' />
        </HorizontalBox>

        <Hr />
        <Text style={[styles.text, gStyleStatic.primaryText]}>You can sign in with</Text>
        {/* <IconPressable onPress={() => console.log('google')} icon={icon} /> */}

        <HorizontalBox width='100%'>
          <Text style={[styles.text, gStyleStatic.primaryText]}>Not registered yet?</Text>
          <ButtonPressable onPress={() => console.log('Create account')} model='secondary' span='Create account' />
        </HorizontalBox>
      </VerticalBox>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 150
  },
  text: {
    fontFamily: PoppinsMedium,
    fontSize: 18
  }
})
