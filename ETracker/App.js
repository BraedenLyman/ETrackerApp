import { StyleSheet, Text, View } from 'react-native';
import {SignUp} from './Pages/SignUp';
import { SignUpValidate } from './Pages/SignUpValidate';
import { SignUpConfirm } from './Pages/SignUpConfirm';
import { SignIn } from './Pages/SignIn';
import { ForgotPassword } from './Pages/ForgotPassword';
import { ResetPasswordConfirm } from './Pages/ResetPasswordConfirm';
import { HomePage } from './Pages/HomePage';
import { ExpenseTracking } from './Pages/ExpenseTracking';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
  <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#6200ee' },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ddd',
        }}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Expenses" component={ExpenseTracking} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
