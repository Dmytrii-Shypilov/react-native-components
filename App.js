import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Input from './ui/Input';
import Button from './ui/Button';
import AuthorizationScreen from './screens/AuthorizationScreen';
import TestScreen from './screens/TestScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <Input label={'name'} placeholder={'This is a placeholder'}/>
      <Button>Press me</Button> */}
      <AuthorizationScreen/>
      {/* <TestScreen/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
