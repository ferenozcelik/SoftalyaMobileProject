import React from 'react';
import styles from './DetailPages.style';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
const DetailPages = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header_logo}>
        <TouchableOpacity onPress={() => navigation.navigate('TaskPage')}>
        <Icon name='chevron-left' size ={40} color= 'black'  />
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
        <SafeAreaView style={{flex:1}}>
          <MapView provider="google" style={{flex:1}}

          />
        </SafeAreaView>
      </View>
      <View style={styles.box}>
        <Text style={styles.detay_title}>{item.title}</Text>
        <Text style={styles.detay}>{item.description}</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.btn_k}
          onPress={() => navigation.navigate('MapPages', {item: item})}>
          <Text style={styles.txt}>Kabul Et</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn_r}
          onPress={() => {}}
          title="Reddet">
          <Text style={styles.txt_r}>Reddet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DetailPages;
