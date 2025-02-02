import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

export function SignIn(){

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Image source={require('../Images/ETrackerLogo.png')} style={styles.logo}/>
                <Text style={styles.title}>Log In</Text>
                <Text style={styles.subText}>Sign in to continue.</Text>
                
                <View style={styles.userInput}>
                    <Text style={styles.inputTitle}>Name</Text>
                    <TextInput style={styles.input} placeholder='John Smith' placeholderTextColor={'black'}/>
                
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder='Password123!' placeholderTextColor={'black'}/>
                    <Text style={styles.forgotPassword}>Forgot password? <Text style={styles.forgotPasswordLink}>Click Here</Text></Text>
                </View>    
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <View>
                    <Text style={styles.signUpText}>Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text></Text>
                </View>
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
        borderColor: 'black',
        backgroundColor: '#04b1a5',
        height: 50,
        borderRadius: 12,
        marginBottom: 15,
        color: 'white',
        paddingHorizontal: 15,
    },
    forgotPassword: {
        color: 'white',
        textAlign: 'center',
    },
    forgotPasswordLink: {
        color: '#04b1a5',
    },
    button: {
        borderWidth: 1,
        backgroundColor: '#030d14',
        borderColor: '#04b1a5',
        height: 55,
        width: '75%',
        borderRadius: 12,
        marginTop: 30,
    },
    buttonText: {
        display: 'flex',
        color: 'white',
        textAlign: 'center',
        marginVertical: 'auto',
        fontSize: 18,
    },
    signUpText: {
        color: 'white',
        marginTop: 10,
    },
    signUpLink: {
        color: '#04b1a5',
    }
});