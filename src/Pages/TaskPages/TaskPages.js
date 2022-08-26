import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './TaskPagesStyle';
import data from '../../../data.json';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TaskComponent from './TaskComponent';

//import Icon from 'react-native-vector-icons/Ionicons';

const TaskPages = ({navigation}) => {
  const [list, setList] = useState(data);
  const handleProductSelect = item => {
    navigation.navigate('DetailPages', {item: item});
  };

  const dataTask = ({item}) => (
    <TaskComponent product={item} onSelect={() => handleProductSelect(item)} />
  );
  return (
    <View style={styles.container}>
      <View
        style={styles.bass}
        onPress={() => {
          navigation.navigate('TaskDetail', {item: item});
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginPages');
          }}>
          <Icon name="chevron-left" size={40} color="black" />
        </TouchableOpacity>
        <Image
          style={styles.img}
          source={require('../../../assets/images/logok.png')}
        />
        <Text style={styles.head_title}>Görevler</Text>
      </View>

      <View style={styles.map_container}>
        <SafeAreaView style={{flex: 1}}>
          <MapView provider="google" style={{flex: 1}} />
        </SafeAreaView>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={list}
          renderItem={dataTask}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default TaskPages;
