import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9E0EA',
    flex: 1,
  },
  header: {
    backgroundColor: colors.blue,
    height: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  task_text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    height: 200,
    width: 350,
  },
  map_container: {
  height:250,
 
    
  },
  box: {
    backgroundColor: 'white',
    color: 'white',
    height: 250,
    width: 360,
    margin: 15,
    marginRight: 15,
    padding: 10,
    marginBottom: 0,
    borderRadius: 30,
  },
  button: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn_k: {
    backgroundColor: colors.darkGreen,
    borderRadius: 10,
    height: 40,
    margin: 10,
    width: 150,
  },
  btn_r: {
    backgroundColor: colors.lightRed,
    borderRadius: 10,
    height: 40,
    margin: 10,
    width: 150,
  },
  txt: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 5,
    color: 'white',
  },
  txt_r: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 5,
    color: 'white',
  },
  detay_title: {
    fontSize: 30,
    color: colors.blue,
    fontWeight: 'bold',
  },
  detay: {
    fontSize: 20,
  },
  image2: {
    height: 40,
    width: 40,
    marginRight: 5,
    marginLeft: 150,
  },
  header_logo: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  backIcon: {
    color: colors.blue,
    marginLeft: 10,
  },
});
export default styles;
