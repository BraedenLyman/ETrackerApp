import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';

export function HomePage(){
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <View style={styles.savings}>
                <Text style={styles.savingsHeaderText}>Month Savings</Text>
                <Text style={styles.savingsAmount}>$3000</Text>
                <View style={styles.savingsEarned}>
                    <View style={styles.savingsTextContainer}>
                        <Text style={styles.savingsText}>Earned</Text>
                        <Text style={styles.savingsText2}>$5000</Text>
                    </View>
                    <View style={styles.savingsTextContainer}>
                        <Text style={[styles.savingsText, styles.savingsAltText]}>Spent</Text>
                        <Text style={styles.savingsText2}>$2000</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.topSpendingHeaderText}>Top Spending</Text>
                <View style={styles.topSpending}>
                    <ScrollView style={styles.scrollView} horizontal={true}>
                        <View style={styles.topSpendingContainer}>
                            <View style={styles.imageContainer}>
                                {/* Image */}
                            </View>
                            <Text style={styles.categorytext}>Home</Text>
                        </View>
                        <View style={styles.topSpendingContainer}>
                            <View style={styles.imageContainer}>
                                {/* Image */}
                            </View>
                            <Text style={styles.categorytext}>Transport</Text>
                        </View>
                        <View style={styles.topSpendingContainer}>
                            <View style={styles.imageContainer}>
                                {/* Image */}
                            </View>
                            <Text style={styles.categorytext}>Education</Text>
                        </View>
                        <View style={styles.topSpendingContainer}>
                            <View style={styles.imageContainer}>
                                {/* Image */}
                            </View>
                            <Text style={styles.categorytext}>Other</Text>
                        </View>
                    </ScrollView>
                </View>
            
            <Text style={styles.topSpendingHeaderText}>Monthly Budget</Text>
            <View style={styles.monthlyBudget}>
                <ScrollView style={styles.scrollView} horizontal={true}>
                    <View style={styles.monthlyBudgetCategory}>
                        <View style={styles.categoryTitleContainer}>
                            <View style={styles.imageContainerAlt}>
                                {/* Image */}
                            </View>
                            <Text style={styles.monthlyCategoryText}>Transportation</Text>
                        </View>
                        <View style={styles.monthlyBudgetAmount}>
                            <Text style={styles.monthlyBudgetText}>Earned</Text>
                            <Text style={styles.monthlyBudgetText2}>$5000</Text>
                        </View>
                    </View>
                    <View style={styles.monthlyBudgetCategory}>
                        <View style={styles.categoryTitleContainer}>
                            <View style={styles.imageContainerAlt}>
                                {/* Image */}
                            </View>
                            <Text style={styles.monthlyCategoryText}>Transportation</Text>
                        </View>
                        <View style={styles.monthlyBudgetAmount}>
                            <Text style={styles.monthlyBudgetText}>Earned</Text>
                            <Text style={styles.monthlyBudgetText2}>$5000</Text>
                        </View>
                    </View>
                    <View style={styles.monthlyBudgetCategory}>
                        <View style={styles.categoryTitleContainer}>
                            <View style={styles.imageContainerAlt}>
                                {/* Image */}
                            </View>
                            <Text style={styles.monthlyCategoryText}>Transportation</Text>
                        </View>
                        <View style={styles.monthlyBudgetAmount}>
                            <Text style={styles.monthlyBudgetText}>Earned</Text>
                            <Text style={styles.monthlyBudgetText2}>$5000</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
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

    // header styles
    header: {
        backgroundColor: '#04b1a5',
        width: '100%',
        height: 140,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        marginTop: 80,
    },

    // body styles
    savings: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#04b1a5',
        borderRadius: 25,
        width: 380,
        height: 200,
        marginTop: 30,
    },
    savingsHeaderText: {
        //color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 20,
    },
    savingsAmount: {
        //color: 'white',
        fontSize: 25,
        marginLeft: 20,
        marginTop: 10,
    },
    savingsTextContainer: {
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: 'white',
        width: '90%',
        height: 25,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
    },
    savingsText: {
        paddingLeft: 15,
        paddingTop: 2,
        height: 25,
        color: 'white',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'blue',
        backgroundColor: 'blue',
        width: '60%',
    },
    savingsText2: {
        color: 'black',
        paddingTop: 3,
        paddingRight: 15,
        marginLeft: 'auto',
    },
    savingsAltText: {
        backgroundColor: 'red',
        borderColor: 'red',
        width: '40%',
    },

    // top spending
    topSpendingHeaderText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 15,
        marginRight: 'auto',
        marginLeft: 15,
    },
    topSpending: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10,
    },
    topSpendingContainer: {
        marginLeft: 10,
        marginRight: 10,
    },
    imageContainer: {
        borderWidth: 1, 
        borderRadius: 15,
        borderColor: 'white',
        width: 80,
        height: 80,
    },
    categorytext: {
        color: 'white',
        textAlign: 'center',
    },
    monthlyBudget: {
        flexDirection: 'row',
    },
    monthlyBudgetCategory: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#04b1a5',
        borderRadius: 25,
        width: 250,
        height: 140,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
    },
    categoryTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginTop: 15,
    },
    imageContainerAlt: {
        borderWidth: 1, 
        borderRadius: 15,
        borderColor: 'white',
        width: 50,
        height: 50,
    },
    monthlyCategoryText: {
        fontSize: 18,
    },
    monthlyBudgetAmount: {
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: 'white',
        width: '90%',
        height: 25,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
    },
    monthlyBudgetText: {
        paddingLeft: 15,
        paddingTop: 2,
        height: 25,
        color: 'white',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'blue',
        backgroundColor: 'blue',
        width: '60%',
    },
    monthlyBudgetText2: {
        color: 'black',
        paddingTop: 3,
        paddingRight: 15,
        marginLeft: 'auto',
    },

    // navigation
    navigation: {
        backgroundColor: '#04b1a5',
        width: '100%',
        height: 100,
        marginTop: 'auto',
    }
})