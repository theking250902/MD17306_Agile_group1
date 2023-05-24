import { ScrollView, StyleSheet, Text, View, Image, TextInput, FlatList } from 'react-native'
import React, {useState} from 'react'
import ItemHome from './ItemHome';

const Home = (props) => {
    // const [dataNe, setdataNe] = useState([]);
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
                {/* <View style={{flexDirection: 'row'}}>
                <View style={styles.container}>
                    <Image source={require('./images/bookcover.png')}></Image>
                    <Text style={styles.name}>The Sixth Child</Text>
                    <Text style={styles.tacgia}>Manith J.</Text>
                    <Text style={styles.mota}>Begin with eight Sisters who have a really deep bonding
                         to one another after their parents died...</Text>
                    <Text style={styles.gia}>$15.00</Text>
                </View>
                <View style={styles.container}>
                    <Image source={require('./images/cover.png')}></Image>
                    <Text style={styles.name}>The Book of God</Text>
                    <Text style={styles.tacgia}>Walter Wangerin</Text>
                    <Text style={styles.mota}>“. . . a feat of imagination and faith.” —Philip Yancey, award-winning author. ...</Text>
                    <Text style={styles.gia}>$16.88</Text>
                </View>
            </View> */}
                <FlatList
                    data={dataNe}
                    renderItem={({ item }) => <ItemHome products={item}  />}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                />

                {/* <Text style={{
                    color: '#000000',
                    fontSize: 20,
                    fontStyle: 'normal',
                    fontWeight: '500',
                    marginTop: 40,
                    marginLeft: 5
                }}>Popular</Text>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.container}>
                        <Image source={require('./images/bookcover.png')}></Image>
                        <Text style={styles.name}>The Sixth Child</Text>
                        <Text style={styles.tacgia}>Manith J.</Text>
                        <Text style={styles.mota}>Begin with eight Sisters who have a really deep bonding
                            to one another after their parents died...</Text>
                        <Text style={styles.gia}>$15.00</Text>
                    </View>
                    <View style={styles.container}>
                        <Image source={require('./images/cover.png')}></Image>
                        <Text style={styles.name}>The Book of God</Text>
                        <Text style={styles.tacgia}>Walter Wangerin</Text>
                        <Text style={styles.mota}>“. . . a feat of imagination and faith.” —Philip Yancey, award-winning author. ...</Text>
                        <Text style={styles.gia}>$16.88</Text>
                    </View>
                </View> */}
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

const dataNe = [{
    "image": "http://dummyimage.com/134x100.png/ff4444/ffffff",
    "bookname": "Dextroamphetamine Sulfate",
    "name": "Felita Tock",
    "mota": "Poisoning by cocaine, intentional self-harm, sequela",
    "gia": "$6.57"
  }, {
    "image": "http://dummyimage.com/152x100.png/5fa2dd/ffffff",
    "bookname": "Acetaminophen",
    "name": "Brok Adam",
    "mota": "Laceration without foreign body of left back wall of thorax with penetration into thoracic cavity",
    "gia": "$3.86"
  }]