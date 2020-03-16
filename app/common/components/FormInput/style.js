import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Constants from '../../../config/constants';

const styles = EStyleSheet.create({
  inputContainer:  {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    borderRadius: 6
  },
  labelStyle: {
    color: Constants.DEFAULT_FONT_COLOR
  },  
  inputStyle: {
    flex: 1,
    paddingHorizontal: 10,
  },
  iconStyle:  {
  }
});

export default styles;