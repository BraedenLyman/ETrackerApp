import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

export function SignUp(){
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const validatePassword = (input) => {
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        setPassword(input);
        setIsPasswordValid(passRegex.test(input));
    }

    return(
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Image source={require('../Images/ETrackerLogo.png')} style={styles.logo}/>
                    <Text style={styles.title}>Create New Account</Text>
                    <Text style={styles.alreadyText}>Already Registered? <Text style={styles.alreadyLink}>Login Here</Text></Text>
        
                        <View style={styles.userInput}>
                            <Text style={styles.inputTitle}>Name</Text>
                            <TextInput style={styles.input} placeholder='John Smith' placeholderTextColor={'#bbbbbb'}/>
                            
                            <Text style={styles.inputTitle}>Email</Text>
                            <TextInput style={styles.input} keyboardType="email-address" placeholder='johnsmith@gmail.com' placeholderTextColor={'#bbbbbb'}/>
                            
                            <Text style={styles.inputTitle}>Password</Text>
                            <TextInput style={styles.input} secureTextEntry={true} onChangeText={validatePassword} placeholder='Password123!' placeholderTextColor={'#bbbbbb'}/>
                            <Text style={[styles.passHint, {color: isPasswordValid ? 'green' : 'red'}]}>
                                {isPasswordValid ? 'Password is valid' : 'Password must be at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character'}
                            </Text>
                        </View>
                    
                    <TouchableOpacity style={[styles.button, {opacity: isPasswordValid ? 1 : 0.5}]} disabled={!isPasswordValid}>
                        <Text style={styles.buttonText}>Sign Up</Text>
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
    alreadyText: {
        color: 'white',
        fontSize: 15,
        marginBottom: 40,
    },
    alreadyLink: {
        color: '#04b1a5',
    },
    userInput: {
        width: '75%',
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
    passHint: {
        fontSize: 12,
        textAlign: 'center',
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