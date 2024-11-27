import React, { useState, useRef } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

export function SignUpConfirm(){

    return(
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Image source={require('../Images/ETrackerLogo.png')} style={styles.logo}/>
                    <Image source={require('../Images/CheckMarkIcon.png')} style={styles.checkMarkIcon}/>
                    <Text style={styles.title}>Congratulations!</Text>
                    <Text style={styles.subTitle}>You are all signed up...</Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign In To Continue</Text>
                    </TouchableOpacity>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 70,
        marginBottom: 40,
    },
    checkMarkIcon: {
        width: 150,
        height: 150,
        marginTop: 50,
        marginBottom: 40,
    },
    title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
    },
    subTitle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 40,
    },
    button: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#030d14',
        height: 55,
        width: 250,
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