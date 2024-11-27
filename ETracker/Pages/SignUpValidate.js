import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

export function SignUpValidate(){
    const [inputs, setInputs] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleInputChange  = (value, index) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);

        if (value !== '' && index < inputRefs.length - 1){
            inputRefs[index + 1].current.focus();
        } 
        else if (value === '' && index > 0){
            inputRefs[index - 1].current.focus();
        }
    };

    const allFieldsFilled = inputs.every(input => input !== '');

    return(
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Image source={require('../Images/ETrackerLogo.png')} style={styles.logo}/>
                    <Text style={styles.title}>You are almost there...</Text>
                    <Text style={styles.checkEmailText}>Check your email for the 4 digit confirmation number.</Text>

                    <View style={styles.inputNumberView}>
                        <Text style={styles.inputNumberTitle}>Enter the 4 digits here:</Text>
                            <View style={styles.numberInput}>
                                {inputs.map((input, index) => (
                                    <TextInput key={index} style={styles.input} keyboardType='number-pad' maxLength={1} value={input} onChangeText={(value) => handleInputChange(value, index)} ref={inputRefs[index]}/>
                                ))}
                            </View>
                            <TouchableOpacity style={[styles.button, {opacity: allFieldsFilled ? 1 : 0.5}]} disabled={!allFieldsFilled}>
                                <Text style={styles.buttonText}>Confirm Sign Up</Text>
                            </TouchableOpacity>
                    </View>
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
    title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
    },
    checkEmailText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 40,
    },
    inputNumberView: {
        marginTop: 50,
        width: '95%',
    },
    inputNumberTitle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    numberInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        gap: 10,
    },
    input: {
        borderWidth: 1,
        backgroundColor: '#04b1a5',
        borderRadius: 14,
        width: '20%',
        height: 80,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    button: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#030d14',
        height: 55,
        borderRadius: 12,
        marginTop: 50,
    },
    buttonText: {
        display: 'flex',
        color: '#030d14',
        textAlign: 'center',
        marginVertical: 'auto',
        fontSize: 18,
    },
});