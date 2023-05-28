import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ItemDetails = () => {
    return (
        <View>
            <View style={{
                width: 500,
                borderWidth: 1,
                borderColor: '#ADB3BC',
                marginTop: 162
            }}>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{
                    color: '#000000',
                    fontStyle: 'normal',
                    fontSize: 18,
                    fontWeight: '600',
                    marginLeft: 3,
                    marginTop: 10
                }}>Sherlock Holmes:</Text>
                <Text style={{
                    color: '#000000',
                    fontStyle: 'normal',
                    fontSize: 17,
                    fontWeight: '500',
                    marginLeft: 3,
                    marginTop: 10,
                    width: 250
                }}> The Complete Novels and Stories Volume I</Text>
            </View>

            <View style={{
                width: 394,
                height: 78,
                marginTop: 50,
            }}>
                <View style={{flexDirection: 'row'}}>
                <Image style={{
                    marginLeft: 9,
                    marginTop: 3
                }} source={require('./images/sao.png')}>
                </Image>
                <Text style={{
                    fontStyle: 'normal',
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#000000',
                    display: 'flex',
                    marginLeft: 10,
                }}>4.47 (25,669 ratings by Goodreads)</Text>
                </View>
                <Text style={{
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#000000',
                    display: 'flex',
                }}>Paperback      Sherlock Holmes       English</Text>
                <Text style={{
                    textAlign: 'center',
                    fontStyle: 'normal',
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#000000',
                    display: 'flex',
                }}>By (author)  Sir Arthur Conan Doyle</Text>
            </View>
            <Image style={{
                width: 157.92,
                height: 270,
                marginLeft: 120,
                borderRadius: 15
            }} source={require('./images/bookcover.png')}></Image>
            <Text style={{
                textAlign: 'center',
                fontWeight: '600',
                fontSize: 20,
                fontStyle: 'normal',
                color: '#2E4756',
                marginTop: 12
            }}>$ 29.39</Text>
        </View>
    )
}

export default ItemDetails

const styles = StyleSheet.create({})