import { 
  Dimensions,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Constants from '../../../config/constants';

const styles = EStyleSheet.create({
  headerContainer:  {
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: Constants.HEADER_BG_COLOR,
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
  title: {
    color: Constants.HEADER_FONT_COLOR,
    fontWeight: '500',
    fontSize: 18,
  },
});

export default styles;