import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/TaskTrackerScreenStyles';
import logo from '../assets/images/Logo.png';
import map3 from '../assets/images/map3.png';
import Entypo from 'react-native-vector-icons/Entypo';

const TaskTrackerScreen = ({route, navigation}) => {
  const {item} = route.params;

  const [rideStarted, setRideStarted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.screenHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TaskDetailsScreen', {item: item});
          }}>
          {!rideStarted && (
            <Entypo name="chevron-left" style={styles.backIcon} size={32} />
          )}
        </TouchableOpacity>
        <Image source={logo} style={styles.headerLogo} />
      </View>

      {/* To-Do: GÖLGE YOK OLUYOR */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Sürüş Detayları</Text>
      </View>

      <View style={styles.mapWrapper}>
        <Image source={map3} style={styles.map} />
      </View>

      <View style={styles.taskDetailsWrapper}>
        <View style={[styles.taskDetailsBox, styles.shadow]}>
          <Text style={styles.taskDetailsTitle}>{item.title}</Text>
          <Text style={styles.taskDetailsDescription}>{item.description}</Text>
        </View>
      </View>

      {!rideStarted && (
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
              setRideStarted(true);
            }}>
            <Text style={styles.buttonText}>Sürüşü Başlat</Text>
          </TouchableOpacity>
        </View>
      )}

      {rideStarted && (
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
              setRideStarted(false);
            }}>
            <Text style={styles.buttonText}>Sürüşü Bitir</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TaskTrackerScreen;
