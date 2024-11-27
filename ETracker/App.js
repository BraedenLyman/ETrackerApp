import { StyleSheet, Text, View } from 'react-native';
import {SignUp} from './Pages/SignUp';
import { SignUpValidate } from './Pages/SignUpValidate';
import { SignUpConfirm } from './Pages/SignUpConfirm';
import { SignIn } from './Pages/SignIn';

export default function App() {
  return (
    <View style={styles.container}>
      <SignIn />
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
