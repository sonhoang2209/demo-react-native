import React from "react";
import { View,Text,StyleSheet,Image,FlatList , TouchableOpacity} from "react-native";
import Iconicons from 'react-native-vector-icons/Ionicons'
import { Rating } from 'react-native-ratings';



const DATA = [
    {
        id: 1,
        name: `Tshirt ahihihi ahiahi hiih  `,
        price: 12.99,
        discountPrice: 10.39,
        saleDetail: 'Up to 60% Off Almost Everything!',
        rate: 8,

    },
    {
        id: 2,
        name: `Tshirt ahihihi ahiahi hiih `,
        price: 12.99,
        discountPrice: 10.39,
        saleDetail: 'Up to 60% Off Almost Everything!',
        rate: 3
    },
    {
        id: 3,
        name: `Tshirt ahihihi ahiahi hiih  `,
        price: 12.99,
        discountPrice: 10.39,
        saleDetail: 'Up to 60% Off Almost Everything!',
        rate: 3
    },
    {
        id: 4,
        name: `Tshirt ahihihi ahiahi hiih  `,
        price: 12.99,
        discountPrice: 10.39,
        saleDetail: 'Up to 60% Off Almost Everything!',
        rate: 3
    },
]



export default function ProductList() {

    const ratingCompleted = () =>{}

    const renderItem = ({ item }) => (
        <View style={[styles.itemProduct]}>
            <View style={product.thumbnail}>
                <Image
                    style={product.image}
                    source={require('../../images/imgex.jpg')} 
                />
                <TouchableOpacity style={[product.imageIcon, styles.Selects]}><Iconicons name="heart-outline" size={25} color="#000" /></TouchableOpacity>
            </View>
            <View style={product.content}>
                <View style={product.selectColor}>
                    <View style={product.wrapperColor}>
                        <View style={product.colorItem}></View>
                    </View>
                </View>
                <View style={product.contents}>
                    <Text style={product.title}>{item?.name}</Text>
                    <View style={product.prices}>
                        <Text style={product.newPrice}>$<Text>2.00</Text></Text>
                        <Text style={product.oldPrice}>$<Text>4.00</Text></Text>
                    </View>
                    <Text style={product.notification}>Up to 60% Off Almost Everything</Text>
                    <View style={product.votes}>
                        <Rating
                            onFinishRating={ratingCompleted}
                            imageSize={20}
                            ratingCount={5}
                            style={{ paddingVertical: 10, justifyContent: 'flex-start', alignItems: 'flex-start', }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
    

    return(
        <View style={{flex: 1}}>
            <View style={styles.flexFilter}>
                <View style={[ styles.Selects, styles.borderRight ,{flexWrap:'nowrap'}]}>
                    <Text>Sort by:</Text>
                    <Text style={styles.text}>Relevance</Text>
                </View>
                <View style={[ styles.Selects,{flexDirection: "row"}]}>
                    <Iconicons name="filter-outline" size={25} color="#000" />
                    <Text style={styles.text}> Filter</Text>
                </View>
            </View>
            {/* products */}
            <View style={[styles.flexProducts , styles.textCenter]}>
                
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    horizontal={false}
                />
                
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    flexProducts: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    flexFilter: {
        flexDirection: "row",
        height:70,
        padding:20
    },
    flexItem: {
        flex: 1,
        borderWidth: 1,
    },
    textCenter :{
        textAlign:"center"
    },
    Selects:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    borderRight:{
        borderRightWidth:2,
        borderColor:'#000'
    },
    text : {
        fontSize:18,
        fontWeight:'bold'
    },
    itemProduct : {
        flex:1,
        padding:1
    },
     
});

const product = StyleSheet.create({
    thumbnail:{
        position:'relative',
    },
    imageIcon:{
        position:'absolute',
        top:10,
        right:10,
        borderRadius:15,
        width:30,
        height:30,
        backgroundColor: "#fff",
    },
    iconContent:{
        backgroundColor:'transparent'
    },
    image: {
        width:'100%',
        height:280
    },

    content: {
        padding:10
    },

    selectColor:{
        paddingBottom:5
    },
    wrapperColor: {
        padding: 1,
        borderWidth:1,
        borderColor:'#000',
        width: 28,
        borderRadius: 15,

    },
    colorItem: {
        width: 24,
        height: 24,
        backgroundColor: 'red',
        borderRadius: 15,
    },


    contents: {
        
    },
    title: {
        fontSize:20,
        paddingBottom:5
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
        fontSize:22,
        textDecorationLine:'line-through',
        
    },
    notification:{
        color:'red',
        paddingBottom:5
        
    }
});
