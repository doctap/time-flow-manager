import React from 'react';
import { Text } from 'react-native';
import { Layout } from '../../components/containers';
import { gStyleStatic } from '../../styles';

export const Home = () => {
  return (
    <Layout style={gStyleStatic.screen}>
      <Text>Home</Text>
    </Layout>
  );
};
