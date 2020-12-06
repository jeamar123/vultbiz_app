import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Constants from '../../../config/constants';

const styles = EStyleSheet.create({
  sideMenuContainer:  {
    flex: 1,
  },
  menuHeader: {
    height: 36,
    backgroundColor: Constants.HEADER_BG_COLOR,
  },  
  menuListContainer:  {
    paddingTop: 10,
  },  
});

export default styles;