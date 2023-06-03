import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ItemListNews from './ItemListNews'

const ListNewsyeuthich = () => {
  return (
    <View>
        <FlatList 
        data={DATA}
        renderItem={({item}) => <ItemListNews dulieu={item}/>}
        keyExtractor={item=>item.id}/>
    </View>
  )
}

export default ListNewsyeuthich

const styles = StyleSheet.create({})

const DATA=
  [
    {
      "_id": "646df8af686be9054c40d0f7",
      "name": "The Sixth Child",
      "price": "15.66$",
      "content": "carch0@deliciousdays.com",
      "author": "Manith J.",
      "image": "https://firebasestorage.googleapis.com/v0/b/bookapp-f06b4.appspot.com/o/%2Fuploads%2Fhashnode%2Fbb297e215dec83b2dafd.jpg?alt=media&token=4da5a3eb-85a1-45b4-8614-6b984407428c"
    },
    {
      "_id": "646df8af686be9054c40d0f8",
      "name": "The Book of God",
      "price": "16$",
      "content": "mconsadineasd askkkkkkkkkkkk asdkhjasd asdasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "author": "Duloxetine Hydrochloride",
      "image": "https://firebasestorage.googleapis.com/v0/b/bookapp-f06b4.appspot.com/o/%2Fuploads%2Fhashnode%2Fa12a81eda2207c7e2531.jpg?alt=media&token=5300f1c3-ab60-433f-8a42-e98e562774d9"
    },
    {
      "_id": "646df8af686be9054c40d0f8",
      "name": "The Book of God",
      "price": "16$",
      "content": "mconsadineasd askkkkkkkkkkkk asdkhjasd asdasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "author": "Duloxetine Hydrochloride",
      "image": "https://firebasestorage.googleapis.com/v0/b/bookapp-f06b4.appspot.com/o/%2Fuploads%2Fhashnode%2Fa12a81eda2207c7e2531.jpg?alt=media&token=5300f1c3-ab60-433f-8a42-e98e562774d9"
    },
    {
      "_id": "646df8af686be9054c40d0f8",
      "name": "The Book of God",
      "price": "16$",
      "content": "mconsadineasd askkkkkkkkkkkk asdkhjasd asdasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "author": "Duloxetine Hydrochloride",
      "image": "https://firebasestorage.googleapis.com/v0/b/bookapp-f06b4.appspot.com/o/%2Fuploads%2Fhashnode%2Fa12a81eda2207c7e2531.jpg?alt=media&token=5300f1c3-ab60-433f-8a42-e98e562774d9"
    }
    
  ]
  
