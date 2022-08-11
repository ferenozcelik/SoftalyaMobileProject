import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TextInput,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './Login.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('TaskPage');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image_container}>
        <Image
          source={require('../../assets/Image/logo512.png')}
          style={styles.image}
        />
        <Text style={styles.text}>AirBus</Text>
      </View>

      <View style={styles.centerView}>
        <Text style={styles.drivers}>Sürücü Giriş Paneli</Text>

        <View style={[styles.input, styles.shadow]}>
          <TextInput placeholder="E-mailnizi giriniz" style={styles.icons} />
          <Icon name="account" size={25} />
        </View>

        <View style={[styles.input, styles.shadow]}>
          <TextInput
            placeholder="Şifrenizi giriniz"
            style={styles.icons}
            isSecure
          />
          <Icon name="key" size={25} />
        </View>

        <View>
          <TouchableOpacity
            style={[styles.button, styles.shadow]}
            onPress={handleSubmit}>
            <Text style={{color: 'white'}}> Giriş Yap </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
