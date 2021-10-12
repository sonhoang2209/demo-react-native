import React from 'react'
import { View, TouchableOpacity,Text,StyleSheet,Image, Dimensions  } from "react-native";
import { ButtonFixedCl, ButtonClearBG } from '../components/button';

const HEIGHT = Dimensions.get('window').height;

export default function Menu() {
    return (
        <View style={{flex:1,borderTopColor:'#aaa',borderBottomWidth:1}}>
            <View style={styles.menuWrapper}>
                <TouchableOpacity style={styles.buttonDefault}>
                    <View style={styles.iconWrap}>
                        <Image style={styles.iconLeft} source={require('../../images/icon/box.png')} />
                    </View>
                    <View  style={{ flex:5, width:'100%' }} >
                        <Text style={styles.menuText}>Order Tracing</Text>
                    </View>
                    <View  style={styles.iconWrap} >
                        <Image style={styles.iconRight} source={require('../../images/icon/right-arrow.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDefault}>
                    <View style={styles.iconWrap}>
                        <Image style={styles.iconLeft} source={require('../../images/icon/padlock.png')} />
                    </View>
                    <View  style={{ flex:5, width:'100%' }} >
                        <Text style={styles.menuText}>Manage Password</Text>
                    </View>
                    <View  style={styles.iconWrap} >
                        <Image style={styles.iconRight} source={require('../../images/icon/right-arrow.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDefault}>
                    <View style={styles.iconWrap}>
                        <Image style={styles.iconLeft} source={require('../../images/icon/address-book.png')} />
                    </View>
                    <View  style={{ flex:5, width:'100%' }} >
                        <Text style={styles.menuText}>Address Book</Text>
                    </View>
                    <View  style={styles.iconWrap} >
                        <Image style={styles.iconRight} source={require('../../images/icon/right-arrow.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDefault}>
                    <View style={styles.iconWrap}>
                        <Image style={styles.iconLeft} source={require('../../images/icon/notification.png')} />
                    </View>
                    <View  style={{ flex:5, width:'100%' }} >
                        <Text style={styles.menuText}>Notifications</Text>
                    </View>
                    <View  style={styles.iconWrap} >
                        <Image style={styles.iconRight} source={require('../../images/icon/right-arrow.png')} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <View style={styles.contact}>
                    <View style={{width:'100%'}}><Text style={styles.contactText}>NEED HELP?</Text></View>
                    <ButtonClearBG text='Contact Us' />
                </View>
                <ButtonFixedCl text='Sign Out' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonDefault: {
        height: HEIGHT*0.12,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        borderBottomWidth: 1,
        borderColor: '#aaa',
        
    },
    menuWrapper: {
        height: HEIGHT*0.5,
    },
    buttons : {
        width:'100%',
        height: HEIGHT*0.5,
        position:'relative',
        paddingBottom:30
    },
    iconLeft: {
        width:20,
        height:20,
    },
    iconRight: {
        width:15,
        height:15,
    },
    menuText: {
        fontSize:17.5,
        fontWeight:'bold',
    },
    iconWrap:{
        flex:1,
        width:'100%',
        alignItems:'center'
    },
    contact:{
        flex:1,
        justifyContent:'center',
        paddingRight:'20%',
        paddingLeft:'20%',
    },
    contactText: {
        fontSize:15,
        marginBottom:15,
        textAlign:'center',
        width:'100%'
    },
    btn: {
        borderWidth:1,
        borderColor:'#aaa',
        
    }
    
});