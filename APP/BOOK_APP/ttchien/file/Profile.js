import {
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
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
  }
  return (
    <ScrollView style={{ backgroundColor:'white',marginTop:'10%' }}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor= '#8983CC' translucent={true} />
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
      <Pressable style={styles.chien2}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../icon-ver2/ic__heart.png')}></Image>
        <Text style={styles.text1}>Your favourite</Text>
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
      <TouchableOpacity onPress={() => onLogout()} style={[styles.chien2,]}>
        <Image
          style={{ width: 30, height: 30, margin: 5, marginLeft: 10 }}
          source={require('../icon-ver2/ic__logout.png')}></Image>
        <Text style={styles.text1}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
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
    alignItems:'center',
    margin: 10,
    height:70,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
  },
  text1: {
    marginTop: 1,
    marginLeft: 10,
    color: '#110000',
    fontFamily: 'Hind Siliguri',
    fontWeight: '100',
    fontSize: 25,
    lineHeight: 32,
  }
});
