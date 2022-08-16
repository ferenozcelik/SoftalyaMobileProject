import React, {useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './TaskPagesStyle';
import data from '../../../data.json';

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
      <View style={styles.bass}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/logok.png')}
        />
        <Text style={styles.head_title}>Detaylar</Text>
      </View>

      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/map.png')}
        />
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
