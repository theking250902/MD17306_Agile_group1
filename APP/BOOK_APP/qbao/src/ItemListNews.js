import { StyleSheet, Text, View,Image, Dimensions,Pressable,TouchableOpacity } from 'react-native'
import React from 'react'

const ItemListNews = (props) => {
  const{dulieu}=props;
  return (
    
    <View style={styles.container} >
      
      <Image style={styles.image} source={{uri:dulieu.image}}/>
      <View style={styles.BookInfor}>
        <TouchableOpacity>
        <Text style={styles.textBookName}>{dulieu.name}</Text>
        </TouchableOpacity>
        <Text numberOfLines={4} style={styles.TextDesbribe}>{dulieu.content}</Text>
      </View>
      
    </View>
  )
}

export default ItemListNews

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginTop:15,
    marginStart:10,
    
  
    
  },

  image:{
    width:130,
    height:200,
   borderRadius:15
  },
  textBookName:{
    fontWeight:'bold',
   fontSize:30
   

  },
  TextDesbribe:{
    marginTop:20,
    width: Dimensions.get('window').width - 180
    
  },
  
  BookInfor:{
    marginStart:10,
    marginEnd:20,
    
  }
})