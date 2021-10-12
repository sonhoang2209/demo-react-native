import React from 'react'
import { View, Text,StyleSheet, Button,Image } from 'react-native'
import { ButtonClearBG } from '../components/button'

export default function Wishlist() {
    return (
        <View style={styles.wishlist}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>wishlist item title</Text>
                <View style={[styles.itemProduct]}>
                    <View style={{flex:2}}>
                        <Image
                            style={styles.image}
                            source={require('../../images/imgex.jpg')} 
                        />
                    </View>
                    <View style={[styles.itemContent]}>
                        <View style={styles.itemInfo}>
                            <Text style={[styles.stock, styles.Text]}>SKU#:<Text>000000000000</Text></Text>
                        </View>
                        <View style={styles.itemBtn}>
                            <ButtonClearBG text='Remove from Wishlist' onPress={()=>{this.submit()}} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>wishlist item title</Text>
                <View style={[styles.itemProduct]}>
                    <View style={{flex:2}}>
                        <Image
                            style={styles.image}
                            source={require('../../images/imgex.jpg')} 
                        />
                    </View>
                    <View style={[styles.itemContent]}>
                        <View style={styles.itemInfo}>
                            <Text style={[styles.price, styles.Text]}>$<Text>20.00</Text></Text>
                            <Text style={[styles.stock, styles.Text]}>SKU#:<Text>000000000000</Text></Text>
                            <Text style={[styles.itemColor, styles.Text]}>Color: <Text>CAMEL</Text></Text>
                            <Text style={[styles.itemSize, styles.Text]}>Size: <Text>XS</Text></Text>
                        </View>
                        <View style={styles.itemBtn}>
                            <ButtonClearBG text='Remove from Wishlist' onPress={()=>{this.submit()}} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    wishlist: {
        flex:1,
    },
    item:{
        height:'45%',
        padding:10,
        paddingBottom:30,
        paddingTop:20,
        borderBottomColor:'#000',
        borderBottomWidth:1
    },
    itemTitle:{
        fontSize:20,
        paddingBottom:10
    },
    itemProduct: {
        flex:1,
        flexDirection:'row'
    },
    image:{
        width:'100%',
        maxHeight:'100%'
    },

    itemContent:{
        flex:3,
        padding:10
    },
    Text: {
        fontSize:18
    },
    itemInfo:{
        flex:1
    },
    itemBtn:{
        flex:1,
        marginTop:10
    }

})
