import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/navigation/Navigation';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
