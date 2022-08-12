import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './LoginPagesStyle';

const LoginPages = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.head_container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/logok.png')}
        />
        <Text style={styles.head_title}>AirBus</Text>
      </View>
      <View style={styles.bottom_container}>
        <Text style={styles.bottom_title}>Sürücü Giriş</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Şifre" />
      </View>
      <View style={styles.bottom_container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('TaskPages')}>
          <Text style={styles.btn_text}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
};

export default LoginPages;
