import React, {useState, useEffect }from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import {View, Platform, Text,StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'

import logo from '../assets/logo.png'
import api from '../services/api';

// behavior="padding" enabled={Platform.OS === 'ios'}

export default function Login({navigation}){
    const [user, setUser] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user){
                navigation.navigate('Main',user );            }
        })
    },[])

    async function handlerLogin(){
        const reponse = await api.post('/devs', {username: user});
        
        const {_id} = response.data;
        
        
        console.log(_id);
        
        await AsyncStorage.setItem('user', _id );
        
        navigation.navigate('Main',{user: _id} );
    }
    

    return <View style={style.container}>  
        <Image source={logo} />

        <TextInput autoCapitalize="none" 
            autoCorrect={false} 
            placeholder="Digite seu usuário no github" 
            placeholderTextColor="#999"
            value={user} 
            onChangeText={setUser}
            style={styles.input}>
        </TextInput>
        <TouchableOpacity onPress={handlerLogin} style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30

    },
    input: {
        height: 46,
        alignSelf : 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadios: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },

    button: {
        height: 46,
        alignSelf : 'stretch',
        backgroundColor: '#DF4723',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadios: 4,
        marginTop: 10,
    },

    buttonText:{
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
})