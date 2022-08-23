import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/TaskTrackerScreenStyles';
import logo from '../assets/images/Logo.png';
import Entypo from 'react-native-vector-icons/Entypo';
import task_marker from '../assets/images/task_marker.png';
import driverData from '../assets/data/driverData';
import driver_marker from '../assets/images/driver_marker.png';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const TaskTrackerScreen = ({route, navigation}) => {
  const {item} = route.params;
  const driver = driverData[0];

  const [rideState, setRideState] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.screenHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TaskDetailsScreen', {item: item});
          }}>
          {!rideState && (
            <Entypo name="chevron-left" style={styles.backIcon} size={32} />
          )}
        </TouchableOpacity>
        <Image source={logo} style={styles.headerLogo} />
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Sürüş Detayları</Text>
      </View>

      <View style={styles.mapWrapper}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          zoomEnabled={true}
          initialRegion={{
            latitude: item.latitude, // 36.884804
            longitude: item.longitude, // 30.704044
            latitudeDelta: 0.08,
            longitudeDelta: 0.08,
          }}>
          {/* Rota Çizme 
          <MapViewDirections
            origin={{
              latitude: 36.87172158465723,
              longtiude: 30.63644210996223,
            }}
            destination={{
              latitude: 36.92437723092483,
              longtiude: 30.737041367753758,
            }}
            apikey={'apikey'}
          /> 
          */}

          {/* Task marker */}
          <Marker
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            title={item.title}
            description={item.description}
            image={task_marker}
          />

          {/* Driver marker */}
          {driverData.map(driver => {
            return (
              <Marker
                coordinate={{
                  latitude: driver.latitude,
                  longitude: driver.longitude,
                }}
                title={driver.title}
                image={driver_marker}
                key={driver.id}
              />
            );
          })}

          {/* map() kullanmadan Driver marker
          <Marker
            coordinate={{
              latitude: driver.latitude,
              longitude: driver.longitude,
            }}
            title={driver.title}
            image={driver_marker}
          /> 
          */}
        </MapView>
      </View>

      <View style={styles.taskDetailsWrapper}>
        <View style={[styles.taskDetailsBox, styles.shadow]}>
          <Text style={styles.taskDetailsTitle}>{item.title}</Text>
          <Text style={styles.taskDetailsDescription}>{item.description}</Text>
        </View>
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

export default TaskTrackerScreen;
