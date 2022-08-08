import {StyleSheet, Dimensions} from 'react-native';
import colors from '../assets/colors/colors';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  screenHeader: {
    backgroundColor: colors.white,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLogo: {
    // To-Do: LOGOYU ORTALAMANIN DAHA İYİ BİR YOLUNU BUL
    marginRight: width / 2 - 20,
    width: 40,
    height: 40,
  },
  backIcon: {
    color: colors.blue,
    marginLeft: 15,
  },
  titleWrapper: {
    backgroundColor: colors.blue,
    height: 45,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.white,
  },
  mapWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  map: {
    width: 382,
    height: 200,
  },
  taskItemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskItem: {
    backgroundColor: colors.white,
    width: 370,
    height: 100,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 15,
  },
  taskItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.blue,
    marginLeft: 10,
    marginTop: 10,
  },
  taskItemDescription: {
    fontFamily: 'Lato-Regular',
    color: colors.darkGray,
    marginLeft: 10,
    marginTop: 5,
  },
  nextIconWrapper: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  nextIcon: {
    color: colors.darkGreen,
  },
  divider: {
    borderBottomColor: colors.blue,
    borderBottomWidth: 1,
    width: 382,
    marginTop: 15,
    marginBottom: 2,
    marginLeft: (width - 382) / 2,
  },
});

export default styles;
