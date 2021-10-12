import React from "react";
import { View, TextInput,Text,StyleSheet } from "react-native";
import {ButtonDefault, ButtonClearBG } from "../../components/button";

class Login extends React.Component {
    constructor() {
        super();
        this.state= {
            email:'',
            password:'',
        }
    }
    submit() {
        console.warn(this.state)
    }
    render() {
        return(
            <View>
                <Text style={styles.title}>Profile</Text>
                <View style={styles.formControl}>
                    <Text>*Email Address</Text>
                    <TextInput
                        placeholder='Your Email'
                        onChangeText={(text) => {this.setState({email: text})}} 
                        style={{
                            borderWidth:2,borderColor:'blue',
                        }}
                    />
                </View>
                <View>
                    <Text>*Password</Text>
                    <TextInput
                        placeholder='Your Password'
                        secureTextEntry={true}
                        onChangeText={(text) => {this.setState({password: text})}} 
                        style={{
                            borderWidth:2,borderColor:'blue',
                        }}
                    />
                </View>
                <View style={styles.linkControl}>
                    <Text>Forgot Password?</Text>
                </View>
                <View style={styles.btn}>
                  <ButtonDefault text='sign in' onPress={()=>{this.submit()}} />
                </View>
                <View style={styles.btn}>
                  <ButtonClearBG text='sign in' onPress={()=>{this.submit()}} />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    titleWrapper: {
        paddingTop: 40,
        paddingBottom:40,
    },
    title: {
        textAlign:'center',
        fontSize: 20,
        marginTop: 40,
        marginBottom:40,
    },
    formControl: {
        marginBottom:20,
    },
    linkControl: {
        marginTop: 20,
        marginBottom:20,
    },
    btn: {
        marginTop:10,
        marginBottom:10
    }
});

export default Login;