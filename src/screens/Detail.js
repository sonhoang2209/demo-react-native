import React from 'react'
import { ButtonFixed } from '../components/button'
import { View,StyleSheet,Text} from "react-native";
import ProductItem from '../components/ProductItem';
import { Rating } from 'react-native-ratings';


export default function Detailstyles() {
    const ratingCompleted = () =>{}
    return (
        <View style={{flex:1}}>
            <View style={styles.thumbnail}>
                <ProductItem />
            </View>
            <View style={{flex:2}}>
                <View style={styles.info}>
                    <View style={styles.infoWrap}>
                        <Text style={product.title}>Tshirt ahihihi ahiahi hiih  asda sdasd asdasd</Text>
                        <View style={styles.flexBox}>
                            <View style={product.prices}>
                                <Text style={product.newPrice}>$<Text>2.00</Text></Text>
                                <Text style={product.oldPrice}>$<Text>4.00</Text></Text>
                            </View>
                            <View style={product.votes}>
                                <Rating
                                    type = 'custom'
                                    onFinishRating={ratingCompleted}
                                    imageSize={15}
                                    ratingCount={5}
                                    ratingColor='#aaa'
                                    style={{ paddingVertical: 10, justifyContent: 'flex-start', alignItems: 'flex-start', }}
                                />
                                <Text style={{fontSize:10, marginLeft:5, marginRight:5}}>1</Text>
                            </View>
                        </View>
                        <Text style={product.notification}>Up to 60% Off Almost Everything</Text>
                    </View>
                    <View style={product.selectColor}>
                        <View style={product.wrapperColor}>
                            <View style={product.colorItem}></View>
                        </View>
                        <View style={product.wrapperColor}>
                            <View style={product.colorItem}></View>
                        </View>
                        <View style={product.wrapperColor}>
                            <View style={product.colorItem}></View>
                        </View>
                    </View>
                </View>
                <ButtonFixed text='added to bag' /> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonBottom: {
        position:'absolute',
        bottom:0,
        alignSelf:'flex-end',
        width:'100%',
        padding:20
    },
    thumbnail:{
        flex:3,
    },
    info: {
        flex:1,
    },
    infoWrap: {
        padding:20,
        borderColor:'#bbb',
        borderBottomWidth:1
    },
    flexBox:{
        flexDirection:'row',
        marginBottom:10
    }
    
});

const product = StyleSheet.create({
    selectColor:{
        paddingBottom:5,
        marginTop:20,
        flexDirection:'row',
    },
    wrapperColor: {
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#000',
        width: 28,
        height:28,
        borderRadius: 15,
        marginRight:5
    },
    colorItem: {
        width: 24,
        height: 24,
        backgroundColor: 'red',
        borderRadius: 15,
    },
    title: {
        fontSize:25,
        paddingBottom:10,
        fontWeight:'600'
    },
    prices: {
        paddingBottom:5,
        flex:1,
        flexDirection:"row",
        alignItems:"flex-end"
    },
    newPrice: {
        fontSize:24,
        color:'red',
        marginRight:5
    },
    oldPrice: {
        fontSize:20,
        textDecorationLine:'line-through',
        
    },
    notification:{
        color:'red',
        paddingBottom:10,
        fontSize:13
    },
    votes:{
        flexDirection:'row',
        alignItems:"center"
    }
});