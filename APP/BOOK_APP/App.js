
import React from 'react';
import {
   View,Text
} from 'react-native';

import Home from './LongVu/Home';
import ItemBook from './LongVu/ItemBook';
import Book from './LongVu/Book';
import ItemDetails from './LongVu/ItemDetails';
import ItemCart from './LongVu/ItemCart';

const App = () => {
 return(
  <View>
    {/* <Home></Home> */}
    <ItemCart></ItemCart>
  </View>
 )
};



export default App;
