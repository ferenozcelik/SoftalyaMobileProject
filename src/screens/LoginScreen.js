// rnfe snippet
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from '../styles/LoginScreenStyles';
import logo from '../assets/images/Logo.png';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.loginHeaderBackground, styles.shadow]}>
        <Image source={logo} style={styles.loginHeaderLogo} />
        <Text style={styles.loginHeaderText}>AirBus</Text>
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Sürücü Giriş</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, styles.shadow]}
            keyboardType={'email-address'}
            placeholder={'Email'}
            placeholderTextColor={'#9B9B9B'}
          />
          <TextInput
            style={[styles.input, styles.shadow]}
            placeholder={'Şifre'}
            placeholderTextColor={'#9B9B9B'}
            secureTextEntry={true}
          />
        </View>
      </KeyboardAvoidingView>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[styles.button, styles.shadow]}
          onPress={() => {
            navigation.navigate('TasksScreen');
          }}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
