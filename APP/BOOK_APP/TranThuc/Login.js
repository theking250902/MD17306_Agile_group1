import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import Home from '../LongVu/Home';
const Login = (props) => {
  const { navigation } = props;

  const DangNhap = () => {
    navigation.navigate('Home')
  }
  const DangKyNe = () => {
    navigation.navigate('Thongtin')
  }
  return (
    <View>
      <Image style={styles.Logo} source={require('../TranThuc/images/Group.png')} />
      <Text style={{
        position: 'absolute',
        marginLeft: 127,
        marginTop: 230,
        fontSize: 25,
        fontWeight: '600',
        fontStyle: 'normal',
        color: '#5B5D8B'
      }}>BOOK APP</Text>
      <TextInput placeholder='User name' style={styles.TextInput1}>
        <Text style={{
          marginStart: 100
        }} />
      </TextInput>

      <TextInput placeholder='Password' style={styles.TextInput2}>
        <Text />
      </TextInput>

      <TouchableOpacity onPress={DangNhap} style={styles.Press}>
        <Text style={styles.TextNut}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.Text1}>Forgetten password?</Text>

      <Text style={styles.Text2}>-Or sign in with-</Text>

      <Image style={styles.Google} source={require('../TranThuc/images/Google.png')}></Image>

      <Image style={styles.Facebook} source={require('../TranThuc/images/Facebook.png')}></Image>

      <Image style={styles.Twitter} source={require('../TranThuc/images/Twitter.png')}></Image>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.Text3}>don't have an account yet?</Text>
        <TouchableOpacity onPress={DangKyNe}>
        <Text style={styles.Text4}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  Logo: {
    position: 'absolute',
    marginTop: 105,
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
    height: 45,
    width: 300,
    marginTop: 395,
    borderColor: '#00000087',
    borderWidth: 1,
    borderRadius: 17,
    marginStart: 45,
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
    fontWeight: '600',
    fontFamily: 'Hind Siliguri',
    fontStyle: 'normal'
  },

  Text1: {
    position: 'absolute',
    marginTop: 520,
    marginStart: 117,
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
    marginTop: 555,
    marginStart: 141,
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
    marginTop: 650,
    marginStart: 82,
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
    marginTop: 650,
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