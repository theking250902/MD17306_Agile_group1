import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const ItemHome = (props) => {
  const { products } = props;
  return (
    <TouchableOpacity>
        <View style={{ flexDirection: 'row'}}>
          <View style={styles.container}>
            <Image style={styles.images} st source={{ uri: products.image }}></Image>
            <Text style={styles.name}>{products.bookname}</Text>
            <Text style={styles.tacgia}>{products.name}</Text>
            <Text style={styles.mota}>{products.mota}</Text>
            <Text style={styles.gia}>{products.gia}</Text>
          </View>
          <View style={styles.container}>
            <Image style={styles.images} st source={{ uri: products.image }}></Image>
            <Text style={styles.name}>{products.bookname}</Text>
            <Text style={styles.tacgia}>{products.name}</Text>
            <Text style={styles.mota}>{products.mota}</Text>
            <Text style={styles.gia}>{products.gia}</Text>
          </View>
        </View>
    </TouchableOpacity>
  )
}

export default ItemHome

const styles = StyleSheet.create({
  container: {
    width: 171,
    marginLeft: 21,
    marginTop: 35,
  },
  name: {
    fontWeight: '800',
    fontSize: 16,
    color: '#000000',
    marginTop: 11,
    marginLeft: 2
  },
  tacgia: {
    color: '#000000B8',
    fontWeight: '600',
    fontSize: 14,
    fontStyle: 'normal',
    marginTop: 9,
    marginLeft: 2
  },
  mota: {
    color: '#000000B8',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    marginTop: 9,
    marginLeft: 2,
  },
  gia: {
    color: '#000000B8',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    marginTop: 9,
    marginLeft: 2
  },
  images: {
    width: 150,
    height: 232,
    borderRadius: 17,
  }
})