import { StyleSheet, Text, View, Image, TextInput, Pressable,StatusBar, TouchableOpacity, ToastAndroid, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react'
import { Alert } from 'react-native';
import { AppContext } from '../util/AppContext';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
import AxiosIntance from '../util/AxiosIntance';
const Register = (props) => {
  const { navigation } = props;
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState('')
  const [confirm_password, setconfirm_password] = useState('')
  const [hide, setHide] = useState(true);
  const { infoUser, setinfoUser } = useContext(AppContext);
  const { isLogin, setIsLogin } = useContext(AppContext);
  const showAlert = (mess) => {
    Alert.alert(
      'Thông báo',
      mess,
    );
  }
  let number = "cc";
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const Login = () => {
    navigation.navigate('Login')
  }
  const onForget = () => {
    navigation.navigate('ForgetPass')
  }
  const dangKyNe = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == "") {
      showAlert("Email không được để trống");
    }
    if (name == "") {
      showAlert("Tên không được để trống");
    }
    else if (emailRegex.test(email) == false) {
      showAlert("Vui lòng nhập email hợp lệ");
    }
    else if (password == "") {
      showAlert("Mật khẩu không được để trống")
    }
    else if (password.length < 6) {
      showAlert("Mật khẩu phải hơn 6 ký tự")
    }
    else if (confirm_password == "") {
      showAlert("Vui lòng nhập lại mật khẩu")
    }
    else if (password != confirm_password) {
      showAlert("Mật khẩu không trùng khớp")
    }
    else {
      try {
        number = getRandomNumber(1000, 9999);
        const res = await AxiosIntance().post("/user/findUser", { email: email });
        console.log(res);
        if (res.result == false) {
          try {
            const subject = "Mã " + number + " là mã OTP của bạn, xin vui lòng không chia sẻ mã này cho bất kì ai, mã sẽ có hiệu lực trong 10 phút."
            ToastAndroid.show("Dang kiem tra ...", ToastAndroid.SHORT);
            const res = await AxiosIntance().post("/user/sendmail", { email: email, subject: subject });
            console.log(res);
            if (res.result == true) {
              showAlert("Mã OTP đã gửi đến email của bạn, xin vui lòng kiểm tra")
              navigation.navigate('OTPValidate', { email: email, OTP: number, name: name, password: password,ROLE:'REGISTER' })

            } else {
              ToastAndroid.show("Kiểm tra thất bại", ToastAndroid.SHORT);
            }
          } catch (error) {
            ToastAndroid.show("Lỗi", ToastAndroid.SHORT);
          }
        }
        else if (res.result == true) {
          showAlert("Tài khoản đã tồn tại")
        }
      } catch (error) {

      }

    }

  }

  return (
    <View style={{ alignItems: 'center', flex: 1,backgroundColor:'white' }}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor='white' translucent={true} />
      <Image style={{ width: windowsWidth / 1.5, height: 210, marginTop: '18%' }} source={require('../TranThuc/images/Group.png')} />
      <TextInput style={styles.TextInput} placeholder='Email' onChangeText={setemail} >
      </TextInput>
      <TextInput style={styles.TextInput} placeholder='Name' onChangeText={setName} >
      </TextInput>
      <View style={{ flexDirection: 'row' }}>
        <TextInput secureTextEntry={hide} style={styles.TextInput} placeholder='Password' onChangeText={setPassword} >
        </TextInput>

        <TouchableOpacity onPress={() => setHide(!hide)} style={{ position: 'absolute', end: 0, top: '40%', marginRight: 10 }}>
          <Image style={{ width: 35, height: 25, }} source={require('../src/hide.png')} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput secureTextEntry={hide} style={styles.TextInput} placeholder='Confirm Password' onChangeText={setconfirm_password} >
        </TextInput>

        <TouchableOpacity onPress={() => setHide(!hide)} style={{ position: 'absolute', end: 0, top: '40%', marginRight: 10 }}>
          <Image style={{ width: 35, height: 25, }} source={require('../src/hide.png')} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => dangKyNe()} style={{ backgroundColor: '#5B5D8B', width: windowsWidth - 100, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 18, marginTop: 18 }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 700 }}>Sign Up</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => onForget()}>
        <Text style={{ color: '#5B5D8B', fontSize: 14, fontWeight: 700, marginTop: 10 }}>Forgetten password?</Text>
      </TouchableOpacity> */}

      <Text style={{}}>-Or sign in with-</Text>

      <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', marginBottom: 10 }}>
        <Image style={styles.ICON} source={require('../TranThuc/images/Google.png')}></Image>
        <Image style={styles.ICON} source={require('../TranThuc/images/Facebook.png')}></Image>
        <Image style={styles.ICON} source={require('../TranThuc/images/Twitter.png')}></Image>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{}}>don't have an account yet ?</Text>
        <TouchableOpacity onPress={() => Login()}>
          <Text style={{ color: '#5B5D8B', fontSize: 14, fontWeight: 700 }}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register

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