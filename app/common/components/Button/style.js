import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Constants from '../../../config/constants';

const styles = EStyleSheet.create({
  buttonStyle:  {
    backgroundColor: Constants.DEFAULT_BUTTON_BG_COLOR
  },
  buttonText: {
    textAlign: 'center',
    color: '#CFD0CF',
    fontWeight: '500',
    color: Constants.DEFAULT_BUTTON_FONT_COLOR,
    padding: 10,
  }
});

export default styles;