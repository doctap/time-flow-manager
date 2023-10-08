import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, SignIn } from '../screens';
import { selector, useRecoilValue } from 'recoil';

const Stack = createNativeStackNavigator();

const getIsSignedIn = () => {
  // custom logic
  return false;
};

export const Navigation = () => {
  const isSignedIn = getIsSignedIn();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSignedIn
          ? (
            <Stack.Screen name='Home' component={Home} />
          ) : (
            <Stack.Screen name='Sign In' component={SignIn} />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
