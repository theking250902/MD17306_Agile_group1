import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native'
import React from 'react'

const ResetPass = () => {
  return (
    <View>
        <Text style={styles.Text1}>Reset password</Text>

        <TextInput style={styles.Text2}>Password</TextInput>

        <Image style={styles.Line1} source={require('../TranThuc/images/Line23.png')}/>

        <TextInput style={styles.Text3}>New password</TextInput>

        <Image style={styles.Line2} source={require('../TranThuc/images/Line23.png')}/>

        <TextInput style={styles.Text4}>Confirm password</TextInput>

        <Image style={styles.Line3} source={require('../TranThuc/images/Line23.png')}/>

        <Pressable style={styles.Press}>
            <Text style={styles.TextNut}>Update</Text>
        </Pressable>
    </View>
  )
}

export default ResetPass

const styles = StyleSheet.create({
    Text1: {
        position: 'absolute',
        marginTop: 128,
        marginStart: 5,
        fontFamily: 'Hind Siliguri',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 39,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },
    Text2: {
        position: 'absolute',
        marginTop: 250,
        marginStart: 22,
        fontFamily: 'Hind Siliguri',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 32,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },
    Text3: {
        position: 'absolute',
        marginTop: 308,
        marginStart: 22,
        fontFamily: 'Hind Siliguri',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 32,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },
    Text4: {
        position: 'absolute',
        marginTop: 375,
        marginStart: 22,
        fontFamily: 'Hind Siliguri',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 32,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000',
    },
    Line1: {
        position: 'absolute',
        marginTop: 288,
        width: 400,
    },
    Line2: {
        position: 'absolute',
        marginTop: 350,
        width: 400,
    },
    Line3: {
        position: 'absolute',
        marginTop: 415,
        width: 400,
    },
    Press:{
        position: 'absolute',
        marginTop: 484,
        marginStart: 40,
        height:44,
        width:299,
        backgroundColor:'#5B5D8B',
        borderRadius:45,
        justifyContent:'center',
        alignItems:'center'
    },
    TextNut: {
        position: 'absolute',
        color:'#FFFFFF',
        fontSize:32,
        fontFamily: 'Hind Siliguri',
    },
})