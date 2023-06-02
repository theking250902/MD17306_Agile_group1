import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={{backgroundColor:'#DDDDDD'}}>
      <Pressable style={styles.chien1}>
        <Image source={require('../icon/ic_UserAvatarIcon.png')}></Image>
      </Pressable>

      <Pressable style={styles.chien2}>
        <Image source={require('../icon/icon_home.png')}></Image>
        <Text style={styles.text1}>Home</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{marginTop: 6, marginLeft: 4}}
          source={require('../icon/icon_profile.png')}></Image>
        <Text style={styles.text2}>Profile</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{marginTop: 5, marginLeft: 3}}
          source={require('../icon/icons_password.png')}></Image>
        <Text style={styles.text3}>Privacy</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{marginTop: 5, marginLeft: 5}}
          source={require('../icon/icon_Key.png')}></Image>
        <Text style={styles.text4}>Manage your password</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image source={require('../icon/icon_heart.png')}></Image>
        <Text style={styles.text5}>Your favourite</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{marginTop: 5, marginLeft: 6}}
          source={require('../icon/icon_Bestsellers.png')}></Image>
        <Text style={styles.text6}>Bestsellers</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{marginTop: 5, marginLeft: 9}}
          source={require('../icon/icon_Clock.png')}></Image>
        <Text style={styles.text7}>Coming soon</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{marginTop: 5, marginLeft: 10}}
          source={require('../icon/icon_ContactUs.png')}></Image>
        <Text style={styles.text8}>Contact Us</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{marginTop: 5, marginLeft: 10}}
          source={require('../icon/icon_AboutUs1.png')}></Image>
          <Text style={{fontSize:25, position:'absolute',top:3 ,left:22}}>i</Text>
        <Text style={styles.text9}>About Us</Text>
      </Pressable>
      <Pressable style={styles.chien2}>
        <Image
          style={{marginTop: 5, marginLeft: 10}}
          source={require('../icon/icon_LogOut.png')}></Image>
        <Text style={styles.text10}>Log Out</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  chien1: {
    height: 150,
    width: '100%',
    backgroundColor: '#8983CC',
  },
  chien2: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10,
    backgroundColor: '#F5F5F5',
  },
  text1: {
    marginTop: 10,
    marginLeft: 40,
    color: '#6C68A5',
    fontFamily: 'Hind Siliguri',
    fontWeight: '100',
    fontSize: 20,
    lineHeight: 32,
  },
  text2: {
    marginTop: 10,
    marginLeft: 40,
    color: '#6C68A5',
    fontFamily: 'Hind Siliguri',
    fontWeight: '100',
    fontSize: 20,
    lineHeight: 32,
  },
  text3: {
    marginTop: 10,
    marginLeft: 40,
    color: '#6C68A5',
    fontFamily: 'Hind Siliguri',
    fontWeight: '100',
    fontSize: 20,
    lineHeight: 32,
  },
  text4: {
    marginTop: 10,
    marginLeft: 40,
    color: '#6C68A5',
    fontFamily: 'Hind Siliguri',
    fontWeight: '100',
    fontSize: 20,
    lineHeight: 32,
  },
  text5: {
    marginTop: 10,
    marginLeft: 30,
    color: '#6C68A5',
    fontFamily: 'Hind Siliguri',
    fontWeight: '100',
    fontSize: 20,
    lineHeight: 32,
  },
  text6: {
    marginTop: 10,
    marginLeft: 34,
    color: '#6C68A5',
    fontFamily: 'Hind Siliguri',
    fontWeight: '100',
    fontSize: 20,
    lineHeight: 32,
  },
  text7: {
    marginTop: 10,
    marginLeft: 43,
    color: '#6C68A5',
    fontFamily: 'Hind Siliguri',
    fontWeight: '100',
    fontSize: 20,
    lineHeight: 32,
  },
  text8: {
    marginTop: 10,
    marginLeft: 43,
    color: '#6C68A5',
    fontFamily: 'Hind Siliguri',
    fontWeight: '100',
    fontSize: 20,
    lineHeight: 32,
  },
  text9: {
    marginTop: 10,
    marginLeft: 44,
    color: '#6C68A5',
    fontFamily: 'Hind Siliguri',
    fontWeight: '100',
    fontSize: 20,
    lineHeight: 32,
  },
  text10: {
    marginTop: 10,
    marginLeft: 44,
    color: '#6C68A5',
    fontFamily: 'Hind Siliguri',
    fontWeight: '100',
    fontSize: 20,
    lineHeight: 32,
  }
});
