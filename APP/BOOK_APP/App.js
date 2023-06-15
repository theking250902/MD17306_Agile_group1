import React from 'react';
import { StyleSheet, Text, View,LogBox } from 'react-native';
import { AppContextProvider } from './util/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './util/AppNavigator';
import ResetPass from './TranThuc/ResetPass';
import ChangePass from './TranThuc/ChangePass';
import OTPInputView from '@twotalltotems/react-native-otp-input'

<OTPInputView pinCount={4} />
const App = () => {
  LogBox.ignoreAllLogs(true)
   return (
     <AppContextProvider>
       <NavigationContainer styles={styles.container}>
         <AppNavigator />
       </NavigationContainer>
     </AppContextProvider>

   );
 };

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
});
export default App;