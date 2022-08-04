import {StyleSheet} from 'react-native';
import color from '../../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9E0EA',
    flex: 1,
  },
  head_container: {
    backgroundColor: color.blue,
    borderBottomLeftRadius: 120,
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    margin: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    alignItems: 'center',
    textAlign: 'center',
    color: color.blue,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20,
    height: 51,
    width: 300,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  bottom_container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  bottom_title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  btn: {
    height: 52,
    width: 300,
    marginTop: 20,
    backgroundColor: color.blue,
    borderRadius: 10,
  },
  btn_text: {
    textAlign: 'center',
    color: 'white',
    margin: 10,
    fontSize: 20,
  },
  end: {
    backgroundColor: color.blue,
    justifyContent: 'flex-end',
    height: 20,
    marginTop: 100,
  },
});
export default styles;
