import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'

const Screen9 = () => {
  return (
    <View style={styles.view}>
      < Image style={styles.image} source={require('../image/Vector.png')}/>
      <Text style={styles.cog} >Cogratulations!</Text>
      <Text style={styles.your} >Your purchase was successful</Text>
      <Text style={styles.order} >Order  ID :Q123-A456-D789-W246</Text>
      <Pressable style={styles.button}>
        <Text style={styles.txtbtn}>Continue Shopping</Text>
      </Pressable>
    </View>
  )
}

export default Screen9

const styles = StyleSheet.create({
            view:{
backgroundColor: '#FFFFFF'
            },
            image: {
                    width: 82,
                    height:82,
                    marginTop: 100,
                    marginLeft:155
            }, cog: {
                fontSize: 34,
                fontWeight: 'bold',
                color: '#000000',
                textAlign:'center',
                marginTop:50
            }, your: {
                fontSize:15,
                textAlign: 'center',
                color: '#444444',
                marginTop:10
            }, order: {
                marginTop:35,
                textAlign:'center',
                fontSize:20,
                color:'#444444',
                
            }, button:{
                backgroundColor:'#5B5D8B',
                width:271,
                height:56,
                borderRadius:50,
                marginLeft:55,
                marginTop:91
            },txtbtn:{
                   color:'#FFFFFF',
                   textAlign:'center',
                   marginTop:10,
                   fontSize:24
            }
})