import React from 'react';
import styles from '../MapPages/MapPages.style';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const MapPages = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header_logo}>
        <TouchableOpacity onPress={() => navigation.navigate('TaskPage')}>
          <Entypo name="chevron-left" style={styles.backIcon} size={32} />
        </TouchableOpacity>
        <Image
          style={styles.image2}
          source={require('../../../assets/images/logo2.png')}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.task_text}>Detaylar</Text>
      </View>
      <View style={styles.map_container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/map2.jpg')}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.detay_title}>{item.title}</Text>
        <Text style={styles.detay}>{item.description}</Text>
      </View>
    </View>
  );
};
export default MapPages;
