import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const detailyeuthich = () => {
  return (
    <ScrollView>
        <Image source={require('./image/kyojuro.jpg')}/>
        <Text style={styles.textBookName}>The Sixth Child</Text>
        <Text style={styles.textAuthor}>Manith J.</Text>
        <Text style={styles.textDesbribe}>carch0@deliciousdays.com</Text>
        <Text style={styles.textDesbribe}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
        

    </ScrollView>
  )
}

export default detailyeuthich

const styles = StyleSheet.create({
    image:{
        height:400,
        width:200
    },
    textBookName:{
        fontWeight:'900',
       fontSize:50,
       textAlign:'center'
    },
    textDesbribe:{
        marginLeft:10,
        marginRight:10
    },
    textAuthor:{
        marginLeft:10,
        marginRight:10,
        fontWeight:'bold'
    }

   
})