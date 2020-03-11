import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  categoryContainer:  {
    // flex: 1,
    marginTop: 10,
    height: 120,
    justifyContent: 'center'
  },  
  category: {
    backgroundColor: '#FFF',
    // flex: 1,
    width: '30%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ededed',
    borderWidth: 1,
  }
});

export default styles;