import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/TaskDetailsScreenStyles';
import logo from '../assets/images/Logo.png';
import task_marker from '../assets/images/task_marker.png';
import driverData from '../assets/data/driverData';
import driver_marker from '../assets/images/driver_marker.png';
import Entypo from 'react-native-vector-icons/Entypo';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const TaskDetailsScreen = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={[styles.screenHeader, styles.shadow]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TasksScreen');
          }}>
          <Entypo name="chevron-left" style={styles.backIcon} size={32} />
        </TouchableOpacity>
        <Image source={logo} style={styles.headerLogo} />
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Detaylar</Text>
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
        </MapView>
      </View>

      <View style={styles.taskDetailsWrapper}>
        <View style={[styles.taskDetailsBox, styles.shadow]}>
          <Text style={styles.taskDetailsTitle}>{item.title}</Text>
          <Text style={styles.taskDetailsDescription}>{item.description}</Text>
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[styles.acceptButton, styles.shadow]}
          // disabled={!pressed ? false : true} //
          onPress={() => {
            // Alert.alert(
            //   'Test',
            //   'Görev kabul edildi',
            //   [{text: 'Tamam', style: 'default'}],
            //   {cancelable: true},
            // );
            navigation.navigate('TaskTrackerScreen', {item: item});
            // setPressed(true); //
          }}>
          <Text style={styles.buttonText}>Kabul Et</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.rejectButton, styles.shadow]}
          onPress={() => {
            // Alert.alert(
            //   'Test',
            //   'Görev reddedildi',
            //   [{text: 'Tamam', style: 'default'}],
            //   {cancelable: true},
            // );
            navigation.navigate('TasksScreen');
          }}>
          <Text style={styles.buttonText}>Reddet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskDetailsScreen;
