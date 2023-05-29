import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React from 'react'

const Thongtin = () => {
  return (
    <View>
    <Image style={styles.Logo} source={require('../TranThuc/images/Group.png')} />

    <TextInput style={styles.TextInput1}>
        <Text style={styles.TextUser}>First name</Text>
    </TextInput>

    <TextInput style={styles.TextInput2}>
        <Text style={styles.TextUser}>Last name</Text>
    </TextInput>

    <TextInput style={styles.TextInput3}>
        <Text style={styles.TextUser}>e-mail</Text>
    </TextInput>

    <TextInput style={styles.TextInput4}>
        <Text style={styles.TextUser}>Password</Text>
    </TextInput>

    <Pressable style={styles.Press}>
        <Text style={styles.TextNut}>Log in</Text>
    </Pressable>

    <Text style={styles.Text}>Already have an account  ? Log in</Text>
    </View>
  )
}

export default Thongtin

const styles = StyleSheet.create({
    Logo: {
        position: 'absolute',
        marginTop: 180,
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
    },
    TextInput2: {
        position: 'absolute',
        height: 40,
        width: 200,
        marginTop: 403,
        borderWidth: 1,
        borderRadius: 270,
        marginStart: 90,
    },
    TextInput3: {
        position: 'absolute',
        height: 40,
        width: 200,
        marginTop: 462,
        borderWidth: 1,
        borderRadius: 270,
        marginStart: 90,
    },
    TextInput4: {
        position: 'absolute',
        height: 40,
        width: 200,
        marginTop: 521,
        borderWidth: 1,
        borderRadius: 270,
        marginStart: 90,
    },
    Press:{
        position: 'absolute',
        marginTop: 606,
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
})