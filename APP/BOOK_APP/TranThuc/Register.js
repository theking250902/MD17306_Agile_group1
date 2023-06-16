<<<<<<< HEAD
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ToastAndroid } from 'react-native'
import React, {useState, useContext} from 'react'
import { AppContext } from '../util/AppContext';
import AxiosIntance from '../src/util/AxiosIntance';
const Register = (props) => {
    const { navigation } = props;
    const [email, setemailUser] = useState("")
    const [password, setpasswordUser] = useState("")
    const [name, setName] = useState('')
    const [confirm_password, setconfirm_password] = useState('')
    const { newPass, setnewPass } = useContext(AppContext);

    const Login = () => {
        navigation.navigate('Login')
    }
    const dangKyNe = async () => {
        // let data = { email, password, name, confirm_password }
        // const doFetch = async (data) => {
        //     let url = 'http://172.16.65.19:3000/userApi/register'
        //     const response = await fetch(url, {
        //         method: "POST", 
        //         headers: {
        //             "Content-Type": "application/json",
        //         }, body: JSON.stringify(data), 
        //     });
        //     return response.json(); 
        // }
        // const res = await doFetch(data);
        // console.log(res);
    
      if (email == "") {
        Alert.alert('Thông Báo', 'Tài khoản không được để trống ', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      } else if (password == "") {
        Alert.alert('Thông Báo', 'Mật khẩu không được để trống ', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      }
  
      const responseDK = await AxiosIntance().post("/api/user/register", { email: email, password: password, confirm_password: confirm_password, name: name });
      console.log(responseDK);
  
  
  
      if (responseDK.result == true) {
        setnewPass(password);
        console.log("Pass moi ne:" + newPass);
        navigation.navigate("Login");
        ToastAndroid.show("Dang ky thanh cong", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Dang ky that bai", ToastAndroid.SHORT);
      }
  
    }
    return (
        <View>
            <Image style={styles.Logo} source={require('../TranThuc/images/Group.png')} />

            <TextInput onChangeText={setName} placeholder='Full name' style={styles.TextInput1}>
                <Text />
            </TextInput>

            <TextInput onChangeText={setemailUser} placeholder='E-mail' style={styles.TextInput2}>
                <Text />
            </TextInput>

            <TextInput onChangeText={setpasswordUser} placeholder='Password' style={styles.TextInput3}>
                <Text />
            </TextInput>
            <TextInput onChangeText={setconfirm_password} placeholder='Confirm_Password' style={styles.TextInput4}>
                <Text />
            </TextInput>

            <TouchableOpacity onPress={dangKyNe} style={styles.Press}>
                <Text style={styles.TextNut}>Sign up</Text>
            </TouchableOpacity>


            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.Text3}>Already have an account?</Text>
                <TouchableOpacity onPress={Login}>
                    <Text style={styles.Text4}>Log in</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
=======
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ToastAndroid, Dimensions } from 'react-native'
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
    <View style={{ alignItems: 'center', flex: 1 }}>
      <Image style={{ width: windowsWidth / 1.5, height: 210, marginTop: '10%' }} source={require('../TranThuc/images/Group.png')} />
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
>>>>>>> main
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


<<<<<<< HEAD
    },
    TextInput3: {
        position: 'absolute',
        height: 45,
        width: 300,
        marginTop: 470,
        borderWidth: 1,
        borderColor: '#00000087',
        borderRadius: 17,
        marginStart: 45
    },
    TextInput4: {
        position: 'absolute',
        height: 45,
        width: 300,
        marginTop: 540,
        borderWidth: 1,
        borderColor: '#00000087',
        borderRadius: 17,
        marginStart: 45
    },
    Press: {
        position: 'absolute',
        marginTop: 630,
        marginStart: 114,
        height: 40,
        width: 150,
        backgroundColor: '#5B5D8B',
        borderRadius: 17,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextNut: {
        position: 'absolute',
        color: '#FFFFFF',
        fontSize: 17,
        fontFamily: 'Hind Siliguri',
    },
    Text: {
        position: 'absolute',
        marginTop: 678,
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
    Text3: {
        position: 'absolute',
        marginTop: 720,
        marginStart: 87,
        fontFamily: 'Hind Siliguri',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 16,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },
    Text4: {
        marginTop: 720,
        fontFamily: 'Hind Siliguri',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 16,
        color: '#000000',
        position: 'absolute',
        marginLeft: 265
    },
=======
>>>>>>> main
})