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
import HomeDetails from '../LongVu/HomeDetails';
import ListView from '../LongVu/Home'
import Register from '../TranThuc/Register';
import Icon from 'react-native-ionicons';
import ItemHome from '../LongVu/ItemHome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Welcome from '../TranThuc/Welcome';
import Notifications from '../LongVu/Notifications';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Users = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

const Mains = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='HomeDetails' component={HomeDetails} />
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
        tabBarLabelStyle:({fontSize:0}),
        tabBarStyle:({height:45}),
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Mains') {
            return <Image style={styles.iconTab} source={require('../src/home-color.png')} />
          } else if (route.name === 'Notifications') {
            return <Image style={styles.iconTab} source={require('../src/notification-color.png')} />
          }
          else if (route.name === 'Book') {
            return <Image style={styles.iconTab} source={require('../src/favourite-color.png')} />
          }
          else if (route.name === 'Profile') {
            return <Image style={styles.iconTab} source={require('../src/man.png')} />
          }

          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
      <Tab.Screen name="Mains" component={Mains} ></Tab.Screen>
      <Tab.Screen name="Notifications" component={Notifications} ></Tab.Screen>
      <Tab.Screen name="Book" component={Book} ></Tab.Screen>
      <Tab.Screen name="Profile" component={Profile} ></Tab.Screen>
      
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

const styles = StyleSheet.create({
  iconTab:{width:30,height:29}
})