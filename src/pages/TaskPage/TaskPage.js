import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import styles from './TaskPage.style';
import data from '../../../data.json';
import Entypo from 'react-native-vector-icons/Entypo';
import TaskComponent from './TaskComponent';

export default function TaskPage({navigation}) {
  const [list, setList] = useState(data);
  const handleProductSelect = item => {
    navigation.navigate('DetailPages', {item: item});
  };
  const renderData = ({item}) => (
    <TaskComponent product={item} onSelect={() => handleProductSelect(item)} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.header_logo}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPages')}>
          <Entypo name="chevron-left" style={styles.backIcon} size={32} />
        </TouchableOpacity>
        <Image
          style={styles.image2}
          source={require('../../../assets/images/logo2.png')}
        />
        
      </View>
      <View style={styles.header}>
        <Text style={styles.task_text}>Görevler</Text>
      </View>
      <View style={styles.map_container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/map.png')}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={list}
          renderItem={renderData}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
