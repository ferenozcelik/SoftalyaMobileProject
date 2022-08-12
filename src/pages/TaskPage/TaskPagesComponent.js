import React from "react";
import styles from 
const TaskPagesComponent= () =>{
return(
   
    <View>
      <View style={style.container}>
        <Text style={style.title}>{item.title}</Text>
        <Text style={style.description}>{item.description}</Text>
        <View style={style.icon}>
          <TouchableOpacity onPress={() => navigation.navigate('DetailPages')}>
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
export default TaskPagesComponent;
const style = StyleSheet.create({
    container: {
      height: 100,
      backgroundColor: 'white',
      borderRadius: 15,
      margin: 10,
      borderTopRightRadius: 0,
    },
    title: {
      color: colors.blue,
      fontSize: 15,
      margin: 10,
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
  




}

