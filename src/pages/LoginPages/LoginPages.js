import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './LoginPages.style';

export default function LoginPages({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.head_container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/logo.png')}
        />
        <Text style={styles.bottom_title}>AirBus</Text>
      </View>
      <View style={styles.bottom_container}>
        <Text style={styles.text}>Sürücü Giriş</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Şifre" />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('TaskPage')}>
          <Text style={styles.btn_text}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
      <View></View>
      <View style={styles.end}></View>
    </View>
  );
}
