import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import AppNavigator from './src/navigation';
import { NativeBaseProvider } from 'native-base';
import theme from './src/config/Theme';


function App() {

  return (
    <NativeBaseProvider theme={theme}>
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
