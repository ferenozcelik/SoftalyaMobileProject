import React from "react";
import {SafeAreaView,View,Text, TouchableOpacity,Image,StyleSheet,TextInput} from "react-native";

const Login = ({navigation}) => {
    function goToTask() {
        navigation.navigate('Task');
       }
    return(
        <SafeAreaView style={{backgroundColor:'#D9E0EA',flex:1}}>
            <View style={styles.container}>
            <Image
        style={styles.image}
        source={require('../assets/logo.png')}
      />
      <Text style={styles.text}>AirBus</Text>
            </View>
            <View>
               <Text style={styles.text2}>Sürücü Giriş</Text>
            </View>
           
            <TextInput style ={styles.input}    placeholder="Email"     keyboardType="E-mail"     textContentType="E-mail" />
            <TextInput style ={styles.input}  placeholder= "Şifre" keyboardType="Şifre"  textContentType="Şifre" />  
            
             <View>
            <TouchableOpacity onPress={goToTask} style={styles.button}>
                <Text style={{color:'#FFFFFF',textAlign:'center',fontSize:15}}>Giriş Yap</Text>
            </TouchableOpacity>
            </View> 
        </SafeAreaView>
    )
};
const styles=StyleSheet.create({
    container:{
        flex:0.600,
        backgroundColor:'#3A5BA0',
        borderLeftWidth:1,
        borderBottomLeftRadius:130,
     borderBottomColor:'#FFA500',
     borderLeftColor:'#FFA500',
     borderWidth:2
    },
    image:{
        height:150,
        width:150,
        alignSelf:'center',
        top:60,
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        top:60,
        color:'white'
    },
    text2:{
        fontSize:30,
        fontWeight:'bold',
        color:'#3A5BA0',
        top:50,
        textAlign:'center',
    },
    input:{
        top:80,
        borderRadius:20,
        borderWidth:2,
        height:50,
        margin:20,
        borderWidth:3,
        padding:10,
        paddingHorizontal:10,
        borderColor:'white',
        backgroundColor:'white',
        borderRadius:10,
        marginHorizontal:60,
        marginVertical:20, 
    },
    button:{
        padding:15,
        borderRadius:10,
        marginHorizontal:60,
        marginVertical:20,
        fontSize:17,
        top:80,
        backgroundColor:'#3A5BA0',
        color:'#FFFFFF'
    }
})
export default Login;