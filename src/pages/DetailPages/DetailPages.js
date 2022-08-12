import React from 'react';
import styles from './DetailPages.style';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
const DetailPages = ({navigation}) => {
  return (
    <View style={styles.container}>
       <View style={styles.header_logo}>
        <TouchableOpacity onPress={()=>navigation.navigate('TaskPage')}>
          <Entypo name="chevron-left" style={styles.backIcon} size={32}/>


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
        <Text style={styles.detay_title}>DetaylarTitle</Text>
        <Text style={styles.detay}>Detaylar</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.btn_k} onPress={() => {}}>
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
