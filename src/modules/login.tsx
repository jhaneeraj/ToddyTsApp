import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Input } from 'react-native-elements';

function Login(props) {

    const [mobile, setValue] = useState('')

    return (<View style={styles.centeredView}>
        <View style={{flexDirection:'row', alignContent:'center',justifyContent:'center'}}>
            <Text style={{color:'grey'}}>No account yet? </Text><Text style={{color:'blue'}} 
            onPress={() => props.navigation.navigate('Dashboard')}>Create one</Text>

        </View>
        <View style={{marginTop:15}}>
            <Input placeholder='Mobile Number' defaultValue={mobile}
                onChangeText={(val) => setValue} />
            <TouchableOpacity onPress={LoginUser} activeOpacity={0.55} style={styles.button} >
                <Text style={styles.text}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    </View>
    )


    function LoginUser() {

    }

}

export default Login;

const styles = StyleSheet.create({
    centeredView: {
        flexDirection: 'column',
        justifyContent: "center",
        color: '#000000',
        top: "20%",
    },
    button: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        padding: 1,
        margin: 20
    },
    text: {
        fontSize: 20,
        color: "white"
    },
})