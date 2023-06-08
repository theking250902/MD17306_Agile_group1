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
}

export default Register

const styles = StyleSheet.create({
    Logo: {
        position: 'absolute',
        marginTop: 180,
        marginStart: 115,
    },
    TextInput1: {
        position: 'absolute',
        height: 45,
        width: 300,
        marginTop: 330,
        borderWidth: 1,
        borderColor: '#00000087',
        borderRadius: 17,
        marginStart: 45

    },
    TextInput2: {
        position: 'absolute',
        height: 45,
        width: 300,
        marginTop: 400,
        borderWidth: 1,
        borderColor: '#00000087',
        borderRadius: 17,
        marginStart: 45

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
})