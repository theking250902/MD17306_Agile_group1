import { ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import ItemHome from './ItemHome';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
import ItemDetails from './HomeDetails';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
import AxiosIntance from '../util/AxiosIntance';
const Home = (props) => {
    // const [dataNe, setdataNe] = useState([]);
    const { navigation } = props;
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        const getNews = async () => {
            const respone = await AxiosIntance().get("/product");
            console.log(respone.result);
            if (respone.result == true) {
                // lay du lieu ok
                setdata(respone.product);

                setisLoading(false);
            }
            else {
                ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
            }
        }
        getNews();

        return () => {
        }
    }, []);
    return (
        <View style={{justifyContent:'center',alignItems:'center' }}>
            <ScrollView  >
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
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <TextInput style={{
                        width: windowsWidth - 80,
                        height: 36,
                        borderWidth: 0.879,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#000000',
                        borderRadius: 45,
                        marginTop: 22,
                    }}>
                    </TextInput>
                    <TouchableOpacity style={{ position: 'absolute', start: '80%', top: '48%' }}>
                        <Image style={{
                        }} source={require('./images/search.png')}></Image>
                    </TouchableOpacity>


                </View>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 20,
                    color: '#000000',
                    marginLeft: 10,
                    marginTop: 20
                }}>Recommendation</Text>

                <View style={{ flexDirection: 'row', width: '100%', marginTop: 10}}>
                    <FlatList
                        numColumns={3}
                        data={data}
                        renderItem={({ item }) => <ItemHome products={item} navigation={navigation} />}
                        keyExtractor={item => item._id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 20,
                    color: '#000000',
                    marginLeft: 10,
                    marginTop: 20
                }}>All Book</Text>

                <View style={{ flexDirection: 'row', width: '100%', marginTop: 10}}>
                    <FlatList
                        numColumns={3}
                        data={data}
                        renderItem={({ item }) => <ItemHome products={item} navigation={navigation} />}
                        keyExtractor={item => item._id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        width: 171,
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