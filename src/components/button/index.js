import React from "react";
import { View, TouchableOpacity,Text,StyleSheet } from "react-native";

function ButtonDefault({ text, onPress }) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.buttonDefault]}>
                <Text style={styles.buttonTextDefault}>{text}</Text>
            </View>
        </TouchableOpacity>
    )

}

function ButtonClearBG({ text, onPress }) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonClearBg}>
                <Text style={styles.buttonTextClearBg}>{text}</Text>
            </View>
        </TouchableOpacity>
    )

}

function ButtonFixed({ text, onPress}) {
    return(
        <View style={styles.buttonBottom}>
            <ButtonDefault text={text} onPress={onPress} />
        </View>   
    )
}

function ButtonFixedCl({ text, onPress }) {
    return(
        <View style={styles.buttonBottom}>
            <ButtonClearBG text={text} onPress={onPress} />
        </View>   
    )

}

const styles = StyleSheet.create({
    buttonDefault: {
        border: 1,
        borderRadius:1,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#f9e301'
    },
    buttonTextDefault: {
        // color:'#fff',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
        textAlign:'center',
        
    },
    buttonClearBg: {
        border: 1,
        borderRadius:1,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: '#aaa'
    },
    buttonTextClearBg: {
        fontSize:16,
        textAlign:'center',
        color:'#0a0a0a',
    },
    buttonBottom: {
        position:'absolute',
        bottom:0,
        alignSelf:'flex-end',
        width:'100%',
        padding:20
    },
});

export { ButtonDefault, ButtonClearBG, ButtonFixed, ButtonFixedCl };
