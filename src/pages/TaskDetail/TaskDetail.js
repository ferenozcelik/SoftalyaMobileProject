import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import styles from './TaskDetail.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const goBack = () => {
  navigation.navigate('TaskPage');
};
const TaskDetail = ({route, navigation}) => {
  const goBack = () => {
    navigation.navigate('TaskPage');
  };
  const {item} = route.params;
  return (
    <SafeAreaView>
      <View style={styles.header_container}>
        <TouchableOpacity onPress={goBack}>
          <Icon name="arrow-left-thick" size={25} style={styles.icons_image} />
        </TouchableOpacity>
        <Text style={styles.header_text}>DETAYLAR</Text>
      </View>
      <View style={styles.map}>
        <Image source={require('../../assets/Image/map2.png')} />
      </View>
      <View style={styles.detail}>
        <Text style={styles.item_text}>{item.title}</Text>
        <Text style={styles.item_text2}>{item.description}</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.yes}
          onPress={() => {
            navigation.navigate('TaskTrackerPage');
          }}>
          <View>
            <Text style={styles.button_text}>Kabul Et</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.no}
          onPress={() => {
            Alert.alert('Görev Reddetildi!'), goBack();
          }}>
          <View>
            <Text style={styles.button_text}>Reddet</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TaskDetail;
