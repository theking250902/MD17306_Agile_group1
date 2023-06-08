import { StyleSheet, Text, View, Image, TextInput, ScrollView, Dimensions, Pressable, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React from 'react'
import { useState, useContext } from 'react'
import { AppContext } from '../util/AppContext'
import axios from 'axios'
import AxiosIntance from '../util/AxiosIntance'
import AsyncStorage from '@react-native-async-storage/async-storage'
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
const Login = (props) => {
  const [email, setEmail] = useState("");
  const { setIsLogin, setinfoUser } = useContext(AppContext)
  const [newPass, setnewPass] = useState(AppContext);
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(true);
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
  const onRegister=()=>{
    navigation.navigate('Register')
  }
  return (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <Image style={{ width: windowsWidth / 1.5, height: 210, marginTop: '30%' }} source={require('../TranThuc/images/Group.png')} />
      <TextInput secureTextEntry={hide} style={styles.TextInput} placeholder='User name' onChangeText={setEmail} >
      </TextInput>
      <View style={{ flexDirection: 'row' }}>
        <TextInput secureTextEntry={hide} style={styles.TextInput} placeholder='Password' onChangeText={setEmail} >
        </TextInput>
        <TouchableOpacity onPress={()=>setHide(!hide)} style={{ position: 'absolute', end: 0, top: '40%', marginRight: 10 }}>
          <Image style={{ width: 35, height: 25, }} source={require('../src/hide.png')} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => onClick()} style={{ backgroundColor: '#5B5D8B', width: windowsWidth - 100, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 18, marginTop: 18 }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 700 }}>Log in</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 15, marginBottom: 10 }}>Forgetten password?</Text>

      <Text style={{}}>-Or sign in with-</Text>

      <View style={{ flexDirection: 'column', marginTop: 10, justifyContent: 'space-between', marginBottom: 10 }}>

        <TouchableOpacity style={{ flexDirection: 'row',}}>
        <Image source={require('../TranThuc/images/Google.png')}></Image>
        <Text style={{ fontSize: 18, marginStart: 10 }}>Sign In with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row',marginTop: 10,}}>
        <Image source={require('../TranThuc/images/Facebook.png')}></Image>
        <Text style={{ fontSize: 18, marginStart: 10 }}>Sign In with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{}}>don't have an account yet ?</Text>
        <TouchableOpacity onPress={()=>onRegister()}>
          <Text style={{ color: '#5B5D8B' ,fontSize:14,fontWeight:700}}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  TextInput: {
    width: windowsWidth - 100, borderWidth: 1, borderRadius: 18,
    marginTop: 15,
    paddingStart: 18,
    fontSize: 15

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