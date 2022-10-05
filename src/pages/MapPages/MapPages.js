import React,{useState}from 'react';
import styles from '../MapPages/MapPages.style';
import {View, Text, Image, Button, TouchableOpacity,SafeAreaView,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView from 'react-native-maps';

const MapPages = ({navigation, route}) => {
  const {item} = route.params;
  const [rideState, setRideState] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header_logo}>
        <TouchableOpacity onPress={() => navigation.navigate('TaskPage')}>
        <Icon name='chevron-left' size ={40} color= 'black'  />
        </TouchableOpacity>
        <Image
          style={styles.image2}
          source={require('../../../assets/images/logo2.png')}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.task_text}>Yol Haritası</Text>
      </View>
      <View style={styles.map_container}>
      <SafeAreaView style={{flex:1}}>
          <MapView provider="google" style={{flex:1}}

          />
        </SafeAreaView>
      </View>
      <View style={styles.box}>
        <Text style={styles.detay_title}>{item.title}</Text>
        <Text style={styles.detay}>{item.description}</Text>
      </View>
      
      {!rideState && (
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={[styles.startRideButton, styles.shadow]}
            onPress={() => {
              Alert.alert(
                'Bilgilendirme',
                'Sürüş başladı',
                [{text: 'Tamam', style: 'default'}],
                {cancelable: true},
              );
              setRideState(true);
            }}>
            <Text style={styles.buttonText}>Sürüşü Başlat</Text>
          </TouchableOpacity>
        </View>
      )}

      {rideState && (
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={[styles.endRideButton, styles.shadow]}
            onPress={() => {
              Alert.alert(
                'Bilgilendirme',
                'Sürüş tamamlandı',
                [{text: 'Tamam', style: 'default'}],
                {cancelable: true},
              );
              setRideState(false);
            }}>
            <Text style={styles.buttonText}>Sürüşü Bitir</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default MapPages;
