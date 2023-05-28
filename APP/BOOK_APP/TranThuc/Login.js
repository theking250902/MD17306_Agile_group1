import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View>
      <Image style={styles.Logo} source={require('../TranThuc/images/Group.png')} />

      <TextInput placeholder='   User name' style={styles.TextInput1}>
        <Text />
      </TextInput>

      <TextInput placeholder='   Password' style={styles.TextInput2}>
        <Text/>
      </TextInput>

      <Pressable style={styles.Press}>
        <Text style={styles.TextNut}>Log in</Text>
      </Pressable>

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
    width: 200,
    marginTop: 344,
    borderWidth: 1,
    borderRadius: 270,
    marginStart: 90,
    marginLeft:90
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
    width: 200,
    marginTop: 396,
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
  Press:{
    position: 'absolute',
    marginTop: 459,
    marginStart: 88,
    height:28,
    width:200,
    backgroundColor:'#5B5D8B',
    borderRadius:45,
    justifyContent:'center',
    alignItems:'center'
},
  TextNut: {
    position: 'absolute',
    color:'#FFFFFF',
    fontSize:17,
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