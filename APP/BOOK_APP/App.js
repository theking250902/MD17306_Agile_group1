import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen9 from './Bui_Viet/screen/Screen9';
import Screen10 from './Bui_Viet/screen/Screen10';
import Screen36 from './Bui_Viet/screen/Screen36';
export default class App extends React.Component {
   render() {
      return (
         <View style = {styles.container}>
            <Screen36/>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});