import { ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect ,useContext} from 'react'
import ItemHome from './ItemHome';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
import ItemDetails from './HomeDetails';
import { AppContext } from '../util/AppContext';
import AxiosIntance from '../util/AxiosIntance';
import { SafeAreaView } from 'react-native-safe-area-context';
const Home = (props) => {
    // const [dataNe, setdataNe] = useState([]);
    const { navigation } = props;
    const [data, setdata] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [searchText, setSearchText] = useState([]);
    const [data1, setdata1] = useState([]);
    const { infoUser, setinfoUser } = useContext(AppContext);
    const [data2, setdata2] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const search = async (searchText) => {
        setisLoading(true);
        setIsSearch(true)
        const respone = await AxiosIntance().get("/product/search/name?keyword=" + searchText);
        console.log("kq tim kiem: ", respone);
        console.log("tim kiem: ", searchText);

        if (respone.result == true) {
            // lay du lie
            //console.log("kq tim kiem: ",respone.product.name);
            setdata(respone.product);

            setisLoading(false);
        }
        else {
            ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
        }
    }
    useEffect(() => {
        const getNews = async () => {
            const respone = await AxiosIntance().get("/product");
            setIsSearch(false)
            if (respone.result == true) {
                console.log(respone.product.name);
                setdata(respone.product);
                // lay du lieu ok
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
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView  >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: '#5747BA',
                        marginLeft: 5,
                        marginTop: 15
                    }}>Hello , {infoUser.name}</Text>
                    <Image style={{
                        marginTop: 10,
                        marginLeft: 10
                    }} source={require('./images/hello.png')}></Image>
                </View>
                <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                    <TextInput placeholder='Search' onChangeText={setSearchText} style={{ width: windowsWidth - 60, fontSize: 18, borderWidth: 0.879, paddingStart: 20, borderColor: '#000000', borderRadius: 45, marginTop: 10, }}></TextInput>
                    <TouchableOpacity onPress={() => search(searchText)} style={{ position: 'absolute', start: '80%', top: '48%' }}>
                        <Image style={{
                        }} source={require('./images/search.png')}></Image>
                    </TouchableOpacity>


                </View>
                {
                    isSearch == false ?
                        <View>
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 20,
                                color: '#000000',
                                marginLeft: 10,
                                marginTop: 20
                            }}>Recommendation</Text>

                            <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                <FlatList
                                    numColumns={5}
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

                            <SafeAreaView style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                <FlatList
                                    numColumns={2}
                                    data={data}
                                    renderItem={({ item }) => <ItemHome products={item} navigation={navigation} />}
                                    keyExtractor={item => item._id}
                                    showsVerticalScrollIndicator={false}
                                />
                                {/* <FlatList
                            data={data}
                            renderItem={({ item }) => <ItemHome products={item} navigation={navigation} />}
                            keyExtractor={item => item._id}
                            showsVerticalScrollIndicator={false}
                        /> */}
                            </SafeAreaView>
                        </View>
                        :
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{
                                fontWeight: '500',
                                textAlign: 'center',
                                fontSize: 20,
                                color: '#000000',
                                marginLeft: 10,
                                marginTop: 20
                            }}>Kết quả tìm kiếm</Text>
                            <FlatList
                                numColumns={2}
                                data={data}
                                renderItem={({ item }) => <ItemHome products={item} navigation={navigation} />}
                                keyExtractor={item => item._id}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                }

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