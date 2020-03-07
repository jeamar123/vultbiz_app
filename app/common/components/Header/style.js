import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  headerContainer:  {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: '#FFF'
  },
  leftContainer:  {
    flex: 1,
    justifyContent: 'center',
  },
  centerContainer:  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer:  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default styles;