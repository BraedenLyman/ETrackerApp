import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

export function ResetPasswordConfirm(){

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Image source={require('../Images/ETrackerLogo.png')} style={styles.logo}/>
                <Image source={require('../Images/CheckMarkIcon.png')} style={styles.logo}/>
                <Text style={styles.title}>Reset password link sent!</Text>
                <Text style={styles.subText}>Check your email for the reset password link</Text>
              
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Back to Sign In</Text>
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
        marginBottom: 60,
    },
    subText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 15,
        marginHorizontal: 25,
    },
    userInput: {
        width: '80%',
    },
    inputTitle: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 5,
        marginTop: 50,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#04b1a5',
        height: 50,
        borderRadius: 12,
        marginBottom: 15,
        color: 'black',
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