import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Constants from '../../../config/constants';

const styles = EStyleSheet.create({
  container:  {
    marginTop: 20,
    flex: 1,
  },  
  shopContainer:  {
    marginTop: 15,
  },  
  headerTitle:  {
    fontSize: 20,
    color: Constants.DEFAULT_FONT_COLOR
  },  
  shop: {
    // padding: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 5,
    marginBottom: 20
  },
  shopImage:  {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  imageOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: '100%',
    height: 200
  },
  shopDetails:  {
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  flexRow:  {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },  
  shopName: {
    marginBottom: 5,
    fontSize: 20,
    flex: 1,
    color: Constants.DEFAULT_FONT_COLOR
  },
  shopAddress:  {
    fontSize: 11,
    fontWeight: '300',
    marginBottom: 5,
    color: Constants.DEFAULT_FONT_COLOR
  },
  shopDistance: {
    width: 100,
    fontSize: 12,
    textAlign: 'right',
    color: Constants.DEFAULT_FONT_COLOR
  }
});

export default styles;