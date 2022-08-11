import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image_container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 414,
    height: 288,
    backgroundColor: '#1F4690',
    borderBottomLeftRadius: 80,
  },
  image: {
    width: 180,
    height: 180,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    padding: 10,
    margin: 10,

    borderWidth: 1,
    borderRadius: 7,
  },
  icons: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  drivers: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 40,
    color: '#3a5ba0',
    fontWeight: 'bold',
  },

  button_container: {
    backgroundColor: 'red',
  },
  centerView: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#3a5ba0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
