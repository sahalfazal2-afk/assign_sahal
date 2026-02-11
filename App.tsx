/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from '@navigations';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider style={styles.safeArea}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <PaperProvider theme={{ dark: isDarkMode, mode: 'adaptive' }}>
        <GestureHandlerRootView style={styles.safeArea}>
          <Navigation />
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
});

export default App;
