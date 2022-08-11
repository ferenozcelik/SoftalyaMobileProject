import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/TaskDetailsScreenStyles';
import logo from '../assets/images/Logo.png';
import map2 from '../assets/images/map2.png';
import Entypo from 'react-native-vector-icons/Entypo';

const TaskDetailsScreen = ({route, navigation}) => {
  // const [pressed, setPressed] = useState(false); //

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

      {/* To-Do: GÖLGE YOK OLUYOR */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Detaylar</Text>
      </View>

      <View style={styles.mapWrapper}>
        <Image source={map2} style={styles.map} />
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
          style={styles.rejectButton}
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
