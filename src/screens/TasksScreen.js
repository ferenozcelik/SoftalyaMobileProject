import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import styles from '../styles/TasksScreenStyles';
import logo from '../assets/images/Logo.png';
import map from '../assets/images/map.png';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';
import tasksData from '../assets/data/tasksData';

const TasksScreen = ({navigation}) => {
  // component kullanımı
  // const renderSong = ({item}) => <SongKart song={item}/>

  const renderTasks = ({item}) => {
    return (
      <View style={styles.taskItemWrapper}>
        <View style={[styles.taskItem, styles.shadow]}>
          {/* textler bir view içine alınabilir */}
          <Text style={styles.taskItemTitle}>{item.title}</Text>
          <Text style={styles.taskItemDescription}>{item.description}</Text>

          <View style={styles.nextIconWrapper}>
            <TouchableOpacity
              hitSlop={{top: 15, bottom: 15, right: 10, left: 20}}>
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
      <View style={[styles.screenHeader, styles.shadow]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <Entypo name="chevron-left" style={styles.backIcon} size={32} />
        </TouchableOpacity>
        <Image source={logo} style={styles.headerLogo} />
      </View>

      {/* GÖLGE YOK OLUYOR */}
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Görevler</Text>
      </View>

      <View style={styles.mapWrapper}>
        <Image source={map} style={styles.map} />
      </View>

      <View style={styles.tasksWrapper}>
        <FlatList
          ListHeaderComponent={<></>}
          data={tasksData}
          renderItem={renderTasks}
          keyExtractor={item => item.id}
          ListFooterComponent={<></>}
        />
      </View>
    </View>
  );
};

export default TasksScreen;
