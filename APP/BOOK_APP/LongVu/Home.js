import { ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ItemHome from './ItemHome';
import ItemDetails from './ItemDetails';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Home = (props) => {
    // const [dataNe, setdataNe] = useState([]);
    const {navigation} = props;


    return (
        <ScrollView >
            <View style={{ flexDirection: 'row' }}>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '700',
                    color: '#5747BA',
                    marginLeft: 5,
                    marginTop: 20
                }}>Hello , Dear</Text>
                <Image style={{
                    marginTop: 10,
                    marginLeft: 5
                }} source={require('./images/hello.png')}></Image>
            </View>
            <View>
                <TextInput style={{
                    width: 257,
                    height: 36,
                    borderWidth: 0.879,
                    borderColor: '#000000',
                    borderRadius: 45,
                    marginTop: 22,
                    marginLeft: 55,
                }}>
                </TextInput>
                <Image style={{
                    position: 'absolute',
                    marginTop: 28,
                    marginLeft: 63
                }} source={require('./images/search.png')}></Image>
                <Image style={{
                    position: 'absolute',
                    marginTop: 24,
                    marginLeft: 275
                }} source={require('./images/icon.png')}></Image>
            </View>
            <Text style={{
                fontWeight: '500',
                fontSize: 20,
                color: '#000000',
                marginLeft: 5,
                marginTop: 20
            }}>Recommendation</Text>

            <View style={{ flexDirection: 'row' }}>
                <FlatList 
                    numColumns={3}
                    data={dataNe}
                    renderItem={({ item }) => <ItemHome products={item} />}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <Text style={{
                fontWeight: '500',
                fontSize: 20,
                color: '#000000',
                marginLeft: 5,
                marginTop: 20
            }}>Popular</Text>
            <View style={{ flexDirection: 'row' }}>
                <FlatList
                    numColumns={3}
                    keyboardShouldPersistTaps='always'
                    data={dataNe}
                    renderItem={({ item }) => <ItemHome products={item} navigation={navigation} />}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        width: 171,
        marginLeft: 21,
        marginTop: 35
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
    }
})

const dataNe = 
[
    {
      "_id": "646df8af686be9054c40d0f7",
      "name": "The Sixth Child",
      "price": 15,
      "content": "carch0@deliciousdays.com",
      "author": "Manith J.",
      "image": "https://firebasestorage.googleapis.com/v0/b/bookapp-f06b4.appspot.com/o/%2Fuploads%2Fhashnode%2Fbb297e215dec83b2dafd.jpg?alt=media&token=4da5a3eb-85a1-45b4-8614-6b984407428c"
    },
    {
      "_id": "646df8af686be9054c40d0f8",
      "name": "The Book of God",
      "price": 16.88,
      "content": "mconsadineasd askkkkkkkkkkkk asdkhjasd asdasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      "author": "Duloxetine Hydrochloride",
      "image": "https://firebasestorage.googleapis.com/v0/b/bookapp-f06b4.appspot.com/o/%2Fuploads%2Fhashnode%2Fa12a81eda2207c7e2531.jpg?alt=media&token=5300f1c3-ab60-433f-8a42-e98e562774d9"
    }
  ]