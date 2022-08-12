import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import color from '../../../assets/color/color';
const TaskComponent = ({product, onSelect}) => {
  return (
    <View>
      <View style={style.container}>
        <Text style={style.title}>{product.title} </Text>
        <Text style={style.description}>{product.description} </Text>
        <View style={style.icon}>
          <TouchableOpacity onPress={onSelect}>
            <Image
              style={style.image}
              source={require('../../../assets/images/icon.jpg')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskComponent;

const style = StyleSheet.create({
  container: {
    height: 100,

    backgroundColor: 'white',
    margin: 10,
    borderRadius: 30,
    borderTopRightRadius: 0,
  },
  title: {
    fontWeight: 'bold',
    color: color.blue,
    margin: 5,
    fontSize: 20,
  },
  description: {
    margin: 5,
  },
  icon: {
    alignItems: 'flex-end',
    margin: 10,
  },
  image: {
    height: 20,
    width: 20,
  },
});
