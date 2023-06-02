import React from 'react';
<<<<<<< HEAD
import { View,Text } from 'react-native';
import Login from './TranThuc/Login';
import Thongtin from './TranThuc/Thongtin';
import ResetPass from './TranThuc/ResetPass';




const App = () => {
 return(
  <Login/>
  //<Thongtin/>
  //<ResetPass/>
 )
};
=======
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
>>>>>>> main

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
});
export default App;