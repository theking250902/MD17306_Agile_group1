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
    const { isLogin, setIsLogin } = useContext(AppContext);
    const [password, setPassword] = useState("")
    const [name, setName] = useState('')
    const [confirm_password, setconfirm_password] = useState('')
    const [hide, setHide] = useState(true);

    const {infoUser, setinfoUser} = useContext(AppContext);


    const Login = () => {
        navigation.navigate('Login')
    }
    const dangKyNe = async () => {

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

        const responseDK = await AxiosIntance().post("/user/register", { email: email, password: password, confirm_password: confirm_password, name: name });
        console.log(responseDK);
        if (responseDK.result == true) {
            console.log(responseDK);
            setinfoUser(responseDK.data.user);
            setIsLogin(true)
            ToastAndroid.show("Dang ky thanh cong", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Dang ky that bai", ToastAndroid.SHORT);
        }

    }
    return (
        <View style={{ alignItems: 'center', flex: 1 }}>
            <Image style={{ width: windowsWidth / 1.5, height: 210, marginTop: '20%' }} source={require('../TranThuc/images/Group.png')} />
            <TextInput style={styles.TextInput} placeholder='User name' onChangeText={setemail} >
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

            <Text style={{ marginTop: 15, marginBottom: 10 }}>Forgetten password?</Text>

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