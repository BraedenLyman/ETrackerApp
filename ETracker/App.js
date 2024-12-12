import { StyleSheet, Text, View } from 'react-native';
import {SignUp} from './Pages/SignUp';
import { SignUpValidate } from './Pages/SignUpValidate';
import { SignUpConfirm } from './Pages/SignUpConfirm';
import { SignIn } from './Pages/SignIn';
import { ForgotPassword } from './Pages/ForgotPassword';
import { ResetPasswordConfirm } from './Pages/ResetPasswordConfirm';
import { HomePage } from './Pages/HomePage';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
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
