import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Screen54 = () => {
  return (
    <View>
      <Image style={styles.image}  source={require('../image/cat.png')}>

      </Image>
      <Text style={{fontSize:16,textAlign:'center',color:'#000000'}} >No notifications at the moment</Text>
    </View>
  )
}

export default Screen54

const styles = StyleSheet.create({
    image:{
        marginTop:115,
        marginLeft:90,
        marginBottom:30

    }
})