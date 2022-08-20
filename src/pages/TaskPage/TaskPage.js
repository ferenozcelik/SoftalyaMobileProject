import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import React, {useState} from 'react';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './TaskPage.style';
import data from '../../../data.json';
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
        <Icon name='chevron-left' size ={40} color= 'black'  />
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
      <SafeAreaView style={{flex:1}}>
          <MapView provider="google" style={{flex:1}}/>
        </SafeAreaView>
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
