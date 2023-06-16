<<<<<<< HEAD
import {StyleSheet, Text, View, Pressable, Image, ToastAndroid, TouchableOpacity} from 'react-native';
import React, {useContext, } from 'react';
import AxiosIntance from '../../src/util/AxiosIntance';
import { AppContext } from '../../util/AppContext';
const Profile = (props) => {
  const {navigation} = props;
  const { infoUser, setinfoUser } = useContext(AppContext)
  const {setIsLogin} = useContext(AppContext)
  const Logout = async () =>{
    const res = await AxiosIntance().get("/api/user/logout");
    if(res.result==true){
      console.log('error result: ', res.result);
      setIsLogin(false);
      ToastAndroid.show("Đăng xuất thành công", ToastAndroid.SHORT);
    }else{
      ToastAndroid.show("Đăng xuất không thành công", ToastAndroid.SHORT);
    }
  }

  const onRessetPass = () =>{
    navigation.navigate('ResetPass');
=======
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useState, useContext } from 'react'
import { AppContext } from '../../util/AppContext'
const Profile = (props) => {
  const { infoUser, setinfoUser } = useContext(AppContext)
  const { isLogin, setIsLogin } = useContext(AppContext)
  const { navigation } = props;
  const onResetPass = () => {
    navigation.navigate('ChangePass', { _id: infoUser._id });
  }
  const onLogout = () => {
    setinfoUser("")
    setIsLogin(false)
    navigation.navigate('Login');
>>>>>>> main
  }
  return (
    <ScrollView style={{ backgroundColor: '#DDDDDD' }}>
      <Pressable style={styles.chien1}>
        <Image
          style={{ width: 90, height: 90, margin: 20 }}
          source={require('../icon-ver2/ic__profile.png')}></Image>
        <Text style={{ marginTop: 50, fontSize: 30, color: '#000000' }}>
          Nguyễn Văn A
        </Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../icon-ver2/ic__home.png')}></Image>
        <Text style={styles.text1}>Home</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../icon-ver2/ic__profile2.png')}></Image>
        <Text style={styles.text1}>Profile</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../icon-ver2/ic__privacy.png')}></Image>
        <Text style={styles.text1}>Privacy</Text>
      </Pressable>
      <Pressable onPress={() => onResetPass()} style={styles.chien2}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../icon-ver2/ic__key.png')}></Image>
        <Text style={styles.text1}>Manage your password</Text>
      </Pressable>
      <TouchableOpacity onPress={onRessetPass} style={styles.chien2}>
        <Image
<<<<<<< HEAD
          style={{marginTop: 5, marginLeft: 5}}
          source={require('../icon/icon_Key.png')}></Image>
        <Text style={styles.text4}>Manage your password</Text>
      </TouchableOpacity>
      <Pressable style={styles.chien2}>
        <Image source={require('../icon/icon_heart.png')}></Image>
        <Text style={styles.text5}>Your favourite</Text>
=======
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../icon-ver2/ic__heart.png')}></Image>
        <Text style={styles.text1}>Your favourite</Text>
>>>>>>> main
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{ width: 32, height: 32, margin: 5, marginLeft: 10 }}
          source={require('../icon-ver2/ic__bestseller.png')}></Image>
        <Text style={styles.text1}>Best sellers</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{ width: 32, height: 32, margin: 5, marginLeft: 10 }}
          source={require('../icon-ver2/ic__coming-soon.png')}></Image>
        <Text style={styles.text1}>Coming soon</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{ width: 32, height: 32, margin: 5, marginLeft: 10 }}
          source={require('../icon-ver2/ic__contact-mail.png')}></Image>
        <Text style={styles.text1}>Contact Us</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../icon-ver2/ic__aboutus.png')}></Image>
        <Text style={styles.text1}>About Us</Text>
      </Pressable>
<<<<<<< HEAD
      <TouchableOpacity onPress={Logout} style={styles.chien2}>
        <Image
          style={{marginTop: 5, marginLeft: 10}}
          source={require('../icon/icon_LogOut.png')}></Image>
        <Text style={styles.text10}>Log Out</Text>
      </TouchableOpacity>
    </View>
=======
      <TouchableOpacity onPress={() => onLogout()} style={[styles.chien2,]}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../icon-ver2/ic__logout.png')}></Image>
        <Text style={styles.text1}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
>>>>>>> main
  );
};

export default Profile;

const styles = StyleSheet.create({
  chien1: {
    flexDirection: 'row',
    height: 150,
    width: '100%',
    backgroundColor: '#8983CC',
    marginBottom: 5,
  },
  chien2: {
    flexDirection: 'row',
    margin: 2,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
  },
  text1: {
    marginTop: 10,
    marginLeft: 10,
    color: '#110000',
    fontFamily: 'Hind Siliguri',
    fontWeight: '100',
    fontSize: 25,
    lineHeight: 32,
  }
});
