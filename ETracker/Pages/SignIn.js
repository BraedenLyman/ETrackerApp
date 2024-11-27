import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

export function SignIn(){

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Image source={require('../Images/ETrackerLogo.png')} style={styles.logo}/>
                <Text style={styles.title}>Log In</Text>
                <Text style={styles.subText}>Sign in to continue.</Text>
                
                <View style={styles.userInput}>
                    <Text style={styles.inputTitle}>Name</Text>
                    <TextInput style={styles.input} placeholder='John Smith' placeholderTextColor={'#bbbbbb'}/>
                
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder='Password123!' placeholderTextColor={'#bbbbbb'}/>
                </View>    
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#030d14',
      width: '100%',
      alignItems: 'center',
    },
    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 70,
        marginBottom: 25,
    },
    title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 15,
    },
    subText: {
        color: 'white',
        fontSize: 15,
        marginBottom: 40,
    },
    userInput: {
        width: '80%',
    },
    inputTitle: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        height: 50,
        borderRadius: 12,
        marginBottom: 15,
        color: 'white',
        paddingHorizontal: 15,
    },
    button: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#030d14',
        height: 55,
        width: '75%',
        borderRadius: 12,
        marginTop: 30,
    },
    buttonText: {
        display: 'flex',
        color: '#030d14',
        textAlign: 'center',
        marginVertical: 'auto',
        fontSize: 18,
    },
});