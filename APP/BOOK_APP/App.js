import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContextProvider } from './util/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './util/AppNavigator';
import { AppContext } from './util/AppContext';
import Welcome from './TranThuc/Welcome';
const App = () => {
   return (
    //  <AppContextProvider>
    //    <NavigationContainer styles={styles.container}>
    //      <AppNavigator />
    //    </NavigationContainer>
    //  </AppContextProvider>
    <Welcome/>
   );
 };

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
});
export default App;