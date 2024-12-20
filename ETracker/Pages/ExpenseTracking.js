import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal, TextInput } from 'react-native';

export function ExpenseTracking(){
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.header}>
                <Text style={styles.amountText}>Total Amount After Expenses</Text>
                <Text style={styles.totalAmount}>$2,400</Text>
            </View>

            <View style={styles.income}>
                <Text style={styles.amountText}>Total Income Per Month</Text>
                <TextInput style={styles.amount}>3,000</TextInput>
            </View>

            <View style={styles.expensesPerMonth}>
                <Text style={styles.amountText}>Total Expenses Per Month</Text>
                <ScrollView style={styles.scrollViewContainer}>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>Home Insurance:  <Text style={styles.itemAmount}>$300</Text></Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>Home Insurance:  <Text style={styles.itemAmount}>$300</Text></Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>Home Insurance:  <Text style={styles.itemAmount}>$300</Text></Text>
                    </View>
                </ScrollView>
                <View style={styles.addExpenseButtonContainer}>
                    <TouchableOpacity style={styles.addExpenseButton} onPress={() => setModalVisible(true)}>
                        <Text style={styles.addExpenseText}>Add Expense </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)} >
                                <Text style={styles.buttonText}>X</Text>
                            </TouchableOpacity>
                            <Text style={styles.modalText}>Add Expense Details</Text>
                        </View>
                        <Text style={styles.inputTextHeader}>Expense Name: </Text>
                        <TextInput style={styles.textInput} />
                        <View style={styles.costCat}>
                            <View style={styles.costCatInput}>
                                <Text style={styles.inputTextHeader}>Cost/Month</Text>
                                <Text style={styles.inputTextHeader}>Category</Text>
                            </View>
                            <View style={styles.costCatInput}>
                                <TextInput style={styles.textInputCostCat} />
                                <TextInput style={styles.textInputCostCat} />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(false)} >
                            <Text style={styles.buttonText}>Add Expense</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    // container styles
    container: {
        flex: 1,
        backgroundColor: '#030d14',
        width: '100%',
        alignItems: 'center',
    },
    scrollView: {
        flexGrow: 1,
    },
    header: {
        width: 200,
        backgroundColor: 'blue',
        width: '100%',
    },
    scrollViewContainer: {
        width: '100%',
    },
    amountText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        marginVertical: 15,
    },
    totalAmount: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
        marginVertical: 10,
    },
    amount: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
        marginVertical: 10,
        marginHorizontal: 'auto',
        borderWidth: 1,
        borderRadius: 10,
        width: 180,
    },
    income: {
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'blue',
        width: '80%',
        padding: 15,
        marginTop: 25,
    },
    expensesPerMonth: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'blue',
        width: '80%',
        padding: 15,
        marginTop: 25,
    },
    item: {
        marginTop: 10,
        marginHorizontal: 'auto',
        borderWidth: 1,
        borderRadius: 20,
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemAmount: {
        color: 'white',
    },
    addExpenseButtonContainer: {
        backgroundColor: 'red',
        height: 30,
        borderRadius: 10,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 'auto',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 50,
    },
    closeButton: {
        borderWidth: 1,
        width: 40,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 'auto',
    },
    modalText: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 'auto',
        marginBottom: 'auto',
    },
    inputTextHeader: {
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        height: 25,
    },
    costCat: {
        marginVertical: 20,
    },
    costCatInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textInputCostCat: {
        borderWidth: 1,
        width: 80,
        borderRadius: 10,
    },
    addButton: {
        backgroundColor: 'green',
        width: 120,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 'auto',
    },
})