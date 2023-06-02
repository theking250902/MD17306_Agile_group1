import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContext } from './AppContext';
import Login from '../TranThuc/Login';
import ResetPass from '../TranThuc/ResetPass';
import Home from '../LongVu/Home';
import ItemCart from '../LongVu/ItemCart';
import Book from '../LongVu/Book';
import Profile from '../ttchien/file/Profile';
import Cart from '../LongVu/Cart';
import ItemDetails from '../LongVu/ItemDetails';
import ListView from '../LongVu/Home'
import Register from '../TranThuc/Register';
import Icon from 'react-native-ionicons';
import ItemHome from '../LongVu/ItemHome';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Users = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
    </Stack.Navigator>
  )
}

const Mains = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='ItemHome' component={ItemHome} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>

  )
}

const News = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({}) => {
          let iconName;

          if (route.name === 'Mains') {
            return <Image source={require('../src/home1.png')} />
          } else if (route.name === 'ItemDetails') {
            return <Image source={require('../src/home1.png')} />
          }
          else if (route.name === 'Cart') {
            return <Image source={require('../src/home1.png')} />
          }
          else if (route.name === 'Profile') {
            return <Image source={require('../src/home1.png')} />
          }


          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Mains" component={Mains} options={{ title: "Home" }}></Tab.Screen>
      <Tab.Screen name="ItemDetails" component={ItemDetails} options={{ title: "ItemDetails" }}></Tab.Screen>
      <Tab.Screen name="Cart" component={Cart} options={{ title: "Cart" }}></Tab.Screen>
      <Tab.Screen name="Profile" component={Profile} options={{ title: "Profile" }}></Tab.Screen>

    </Tab.Navigator>
  )

}
const AppNavigator = () => {
  const { isLogin } = useContext(AppContext);

  return (
    <>
      {isLogin == false ? <Users /> : <News />}
    </>

  )
}

export default AppNavigator

const styles = StyleSheet.create({})