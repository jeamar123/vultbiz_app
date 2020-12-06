import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Constants from '../../../config/constants';

const styles = EStyleSheet.create({
  categoryContainer:  {
    marginTop: 10,
    // height: 150,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }, 
  category: {
    backgroundColor: '#FFF',
    width: width / 3.2,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ededed',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 3,
  },
  categoryImage:  {
    resizeMode: 'contain', 
    width: 35, 
    height: 35,
    alignSelf: 'center',
    marginBottom: 10,
  },
  categoryName: {
    textAlign: 'center',
    color: Constants.DEFAULT_FONT_COLOR
  },
  iconImage:  {
    alignSelf: 'center',
    marginBottom: 10,
    color: Constants.DEFAULT_ICON_COLOR,
  }
});

export default styles;