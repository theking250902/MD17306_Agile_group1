import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, SafeAreaView, Dimensions, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const Welcome = () => {
  const [page, setPage] = useState(LOGIN);
  const [hide, setHide] = useState(true);
  return (
    <View style={{ width: '100%', height: '100%', }}>
      <View style={{ width: '100%', height: '25%', marginBottom: '13%' }}>
        <TopComponent page={page} setPage={setPage} />
      </View>
        {page === LOGIN ?

          <View style={{ width: '100%', height: '55%', backgroundColor: '#F5f5f5', }}>
            <Mid1Component hide={hide} setHide={setHide} />
          </View>
          :
          <View style={{ width: '100%', height: '55%', backgroundColor: '#F5f5f5', }}>
            <Mid2Component hide={hide} setHide={setHide} />
          </View>
        }
      <View style={{ width: '100%', backgroundColor: '#F5f5f5',height: '28%' }}>
        <BotComponent />
      </View>
    </View>

  )
}
const BotComponent = () => {
  return (
    <View style={{ width: '100%', height: '40%' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40, width: windowsWidth - 60, marginLeft: 30 }}>
        <View style={{ height: 1, width: '30%', backgroundColor: '#707070' }}></View>
        <Text style={{ fontSize: 16, fontWeight: 500 }}>  hoặc tiếp tục bằng  </Text>
        <View style={{ height: 1, width: '30%', backgroundColor: '#707070' }}></View>
      </View>
      <View style={{ width: windowsWidth - 60, marginLeft: 30, height: 50, marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.pressMXH}>
          <Image style={styles.iconMXH} source={require('./images/google.png')} />
          <Text style={styles.nameMXH}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pressMXH}>
          <Image style={styles.iconMXH} source={require('./images/google.png')} />
          <Text style={styles.nameMXH}>Facebook</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
const Mid1Component = ({ hide, setHide }) => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Text style={{ fontSize: 20, fontWeight: 700, color: 'black', margin: 20 }}>Chào mừng bạn trở lại</Text>
      <View style={styles.textInput}>
        <Image style={{ width: 30, height: 35, margin: 10, }} resizeMode='stretch' source={require('./images/mail.png')} />
        <TextInput style={{ width: '80%', fontSize: 18 }} placeholder='Email' />
      </View>
      <View style={styles.textInput}>
        <Image style={{ width: 40, height: 35, margin: 10, }} resizeMode='stretch' source={require('./images/padlock.png')} />
        <TextInput secureTextEntry={hide} style={{ width: '80%', fontSize: 18 }} placeholder='Password' />
        <TouchableOpacity onPress={() => setHide(!hide)} style={{ position: 'absolute', right: 0 }}>
          <Image style={{ width: 25, height: 25, margin: 10 }} resizeMode='stretch' source={require('./images/hide.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ margin: '5%', marginBottom: 0 }}>
        <Text style={{ color: '#39a78e', fontSize: 16, textAlign: 'right' }}>Quên mật khẩu?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.textInput, { backgroundColor: '#39a78e' }]}>
        <Text style={{ fontSize: 18, color: '#FFFFFF', fontWeight: 700 }}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  )
}
const Mid2Component = ({ hide, setHide }) => {
  return (
    <ScrollView style={{ width: '100%', height: '100%' }}>
      <Text style={{ fontSize: 20, fontWeight: 700, color: 'black', margin: 20, marginBottom: 0 }}>Đăng ký tài khoản</Text>
      <View style={styles.textInput}>
        <Image style={{ width: 30, height: 35, margin: 10, }} resizeMode='stretch' source={require('./images/mail.png')} />
        <TextInput style={{ width: '80%', fontSize: 18 }} placeholder='Họ và tên' />
      </View>
      <View style={styles.textInput}>
        <Image style={{ width: 30, height: 35, margin: 10, }} resizeMode='stretch' source={require('./images/mail.png')} />
        <TextInput style={{ width: '80%', fontSize: 18 }} placeholder='Email' />
      </View>
      <View style={styles.textInput}>
        <Image style={{ width: 40, height: 35, margin: 10, }} resizeMode='stretch' source={require('./images/padlock.png')} />
        <TextInput secureTextEntry={hide} style={{ width: '80%', fontSize: 18 }} placeholder='Mật khẩu' />
        <TouchableOpacity onPress={() => setHide(!hide)} style={{ position: 'absolute', right: 0 }}>
          <Image style={{ width: 25, height: 25, margin: 10 }} resizeMode='stretch' source={require('./images/hide.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.textInput}>
        <Image style={{ width: 40, height: 35, margin: 10, }} resizeMode='stretch' source={require('./images/padlock.png')} />
        <TextInput secureTextEntry={hide} style={{ width: '80%', fontSize: 18 }} placeholder='Nhập lại mật khẩu' />
        <TouchableOpacity onPress={() => setHide(!hide)} style={{ position: 'absolute', right: 0 }}>
          <Image style={{ width: 25, height: 25, margin: 10 }} resizeMode='stretch' source={require('./images/hide.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ margin: '5%', marginBottom: 0 }}>
        <Text style={{ color: '#39a78e', fontSize: 16, textAlign: 'right' }}>Quên mật khẩu?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.textInput, { backgroundColor: '#39a78e',marginBottom:10 }]}>
        <Text style={{ fontSize: 18, color: '#FFFFFF', fontWeight: 700 }}>Đăng nhập</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
const TopComponent = ({ page, setPage }) => {
  return (
    <View style={{ flex: 1, }}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FFFFFF" translucent={true} />
      <View style={{ width: '100%', height: '100%', backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ height: '65%', marginTop: '15%' }} source={require('./images/logo_icon.png')} />
      </View>
      <View style={{ width: '100%', height: 50, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <TouchableOpacity
          onPress={() => setPage(LOGIN)}
          disabled={page === LOGIN ? true : false}
          style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 700, }}>Đăng nhập</Text>
          {page === LOGIN ? <View style={{ height: 3, width: '100%', backgroundColor: '#39a78e', position: 'absolute', bottom: 0 }}></View> : null}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setPage(REGISTER)}
          disabled={page === REGISTER ? true : false}
          style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 700, }}>Đăng ký</Text>
          {page === REGISTER ? <View style={{ height: 3, width: '100%', backgroundColor: '#39a78e', position: 'absolute', bottom: 0 }}></View> : null}
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Welcome

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: '100%',
    height: '100%',
    flex: 1,

  },
  logoImage: {
    alignItems: 'center',
    justifyContent: 'center',
  }
  , textInput: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    width: windowsWidth - 60,
    marginLeft: 30,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 15
  },
  iconMXH: {
    width: 30,
    height: 30,
    marginRight: '10%',
    marginLeft: '14%'
  },
  nameMXH: {
    fontSize: 18,
    marginLeft: 4
  },

  pressMXH: {
    flexDirection: 'row',
    alignItems: 'center',

    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: '100%'
  }
})