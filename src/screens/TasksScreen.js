import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from '../styles/TasksScreenStyles';
import logo from '../assets/images/Logo.png';
import task_marker from '../assets/images/task_marker.png';
import driver_marker from '../assets/images/driver_marker.png';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import tasksData from '../assets/data/tasksData';
import driverData from '../assets/data/driverData';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const TasksScreen = ({navigation}) => {
  // const renderSong = ({item}) => <SongKart song={item}/>

  const renderTasks = ({item}) => {
    return (
      <View
        style={[
          styles.taskItemWrapper,
          {marginTop: item.id === 'task-1' ? 10 : 0},
          // ilk item için marginTop ver, diğerleri için 0
        ]}>
        <View style={[styles.taskItem, styles.shadow]}>
          {/* textler bir view içine alınabilir */}
          <Text style={styles.taskItemTitle}>{item.title}</Text>
          <Text style={styles.taskItemDescription}>{item.description}</Text>

          <View style={styles.nextIconWrapper}>
            <TouchableOpacity
              hitSlop={{top: 50, bottom: 8, right: 10, left: 70}}
              onPress={() => {
                navigation.navigate('TaskDetailsScreen', {item: item});
              }}>
              <Feather
                name="arrow-right-circle"
                size={40}
                style={styles.nextIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <Entypo name="chevron-left" style={styles.backIcon} size={32} />
        </TouchableOpacity>
        <Image source={logo} style={styles.headerLogo} />
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Görevler</Text>
      </View>

      <View style={styles.mapWrapper}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          zoomEnabled={true}
          initialRegion={{
            latitude: 36.90610316958342,
            longitude: 30.691201472660907,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {/* Markers */}
          {tasksData.map(task => {
            return (
              <Marker
                coordinate={{
                  latitude: task.latitude,
                  longitude: task.longitude,
                }}
                title={task.title}
                description={task.description}
                image={task_marker}
                key={task.id}
                // keyExtractor={task => task.id} ERROR
              />
            );
          })}
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

      <View style={styles.divider} />

      {/* ScrollView içinde FlatList kullanırsan performans hatası verir. FlatList'i bir View içine alıp flex={1} vererek scroll yapabilirsin.
      To-Do: Başka bir çözümü var mı? */}
      <View flex={1} style={styles.tasksWrapper}>
        <FlatList
          data={tasksData}
          renderItem={renderTasks}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default TasksScreen;
