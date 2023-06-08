import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React from 'react'
import { useState, useContext } from 'react'
import { AppContext } from '../util/AppContext'
import axios from 'axios'
import AxiosIntance from '../src/util/AxiosIntance'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = (props) => {
  const [email, setEmail] = useState("");
  const { setIsLogin, setinfoUser } = useContext(AppContext)
  const [newPass,setnewPass] = useState(AppContext);
  const [password, setPassword] = useState("");
  const { navigation } = props;
  const showAlert = (mess) => {
    Alert.alert(
      'Thông báo',
      mess,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );
  }
  const onClick = async () => {
    if (email.length <= 0) {
      showAlert("Vui lòng nhập username")
    }
    else if (password.length <= 0) {
      showAlert("Vui lòng nhập password")
    }
     else {
      try {
        const res = await AxiosIntance().post("/api/user/login", { email: email, password: password });
        if (res.result == true) {
          setinfoUser(res.user);
          setIsLogin(true);
          await AsyncStorage.setItem("token", res.token);
          ToastAndroid.show("Đăng Nhập thành công", ToastAndroid.SHORT);
          setnewPass(password);
        } else {
          ToastAndroid.show("Đăng nhập that bai", ToastAndroid.SHORT);
        }
      } catch {
        ToastAndroid.show("Đăng nhập thất bạiuuuu", ToastAndroid.SHORT);
      }
    }
  }
  return (
    <View>
      <Image style={styles.Logo} source={require('../TranThuc/images/Group.png')} />

      <TextInput placeholder='User name' onChangeText={setEmail} style={styles.TextInput1}>
        <Text style={{
          marginStart: 100
        }} />
      </TextInput>

      <TextInput placeholder='Password' onChangeText={setPassword} style={styles.TextInput2}>
        <Text />
      </TextInput>

      <TouchableOpacity onPress={() => onClick()} style={styles.Press}>
        <Text style={styles.TextNut}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.Text1}>Forgetten password?</Text>

      <Text style={styles.Text2}>-Or sign in with-</Text>

      <Image style={styles.Google} source={require('../TranThuc/images/Google.png')}></Image>

      <Image style={styles.Facebook} source={require('../TranThuc/images/Facebook.png')}></Image>

      <Image style={styles.Twitter} source={require('../TranThuc/images/Twitter.png')}></Image>

      <Text style={styles.Text3}>don't have an account yet ?  Sign up </Text>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  Logo: {
    position: 'absolute',
    marginTop: 186,
    marginStart: 115,
  },
  TextInput1: {
    position: 'absolute',
    height: 40,
    width: 190,
    marginTop: 344,
    borderWidth: 1,
    borderColor: '#00000087',
    borderRadius: 50,
    marginStart: 90,
    marginLeft: 90,
  },
  TextUser: {
    fontFamily: 'Hind Siliguri',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 23,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000000'
  },
  TextInput2: {
    position: 'absolute',
    height: 40,
    width: 190,
    marginTop: 396,
    borderColor: '#00000087',
    borderWidth: 1,
    borderRadius: 270,
    marginStart: 90,
  },
  TextPass: {
    fontFamily: 'Hind Siliguri',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 23,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000000',
  },
  Press: {
    position: 'absolute',
    marginTop: 459,
    marginStart: 88,
    height: 28,
    width: 190,
    backgroundColor: '#5B5D8B',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextNut: {
    position: 'absolute',
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Hind Siliguri',
  },

  Text1: {
    position: 'absolute',
    marginTop: 501,
    marginStart: 110,
    fontFamily: 'Hind Siliguri',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#4A489A',
  },
  Text2: {
    position: 'absolute',
    marginTop: 547,
    marginStart: 132,
    fontFamily: 'Hind Siliguri',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000000',
  },
  Google: {
    position: 'absolute',
    marginTop: 600,
    marginStart: 105,
  },
  Facebook: {
    position: 'absolute',
    marginTop: 600,
    marginStart: 166,
  },
  Twitter: {
    position: 'absolute',
    marginTop: 600,
    marginStart: 226,
  },
  Text3: {
    position: 'absolute',
    marginTop: 680,
    marginStart: 87,
    fontFamily: 'Hind Siliguri',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000000',
  },


})