import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './Task.style';
import taskData from '../../assets/data/taskData';

const Task = ({navigation}) => {
  const renderTasks = ({item}) => {
    const goDetail = () => {
      navigation.navigate('TaskDetailPage', {item: item});
    };
    return (
      <View style={styles.taskitems}>
        <Text style={styles.taskItemTitle}>{item.title}</Text>
        <Text style={styles.taskItemDescription}>{item.description}</Text>
        <View style={styles.icons_items}>
          <TouchableOpacity onPress={goDetail}>
            <Image
              source={require('../../assets/Image/icon.png')}
              style={styles.icon_image}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.icons}></View>

        <Image
          source={require('../../assets/Image/logoTask.png')}
          style={styles.header_image}
        />
        <Text style={styles.header_text}>AIRBUS</Text>
      </View>

      <View style={styles.tasksView}>
        <Text style={styles.tasks}>Görevler</Text>
      </View>

      <View style={styles.map}>
        <Image source={require('../../assets/Image/map.png')} style={styles.map} />
      </View>

      <View>
        <FlatList
          data={taskData}
          renderItem={renderTasks}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
export default Task;
