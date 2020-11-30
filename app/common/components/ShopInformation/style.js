import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Constants from '../../../config/constants';

const styles = EStyleSheet.create({
  detailsContainer: {
    backgroundColor: '#eaeaea',
    flex: 1,
  },
  scrollDetailsContainer: {
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  shopNameContainer:  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },  
  shopName: {
    fontSize: 25,
    fontWeight: '600',
    color: Constants.DEFAULT_FONT_COLOR,
    flex: 1,
  },
  shopDistance: {
    width: 120,
    fontSize: 14,
    textAlign: 'right',
    fontWeight: '500',
    color: Constants.DEFAULT_FONT_COLOR,
  },
  shopAddress:  {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 20,
    color: Constants.DEFAULT_FONT_COLOR,
  },
  ratingContainer:  {
    flexDirection: 'row',
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 10
  },
  starValue:  {
    color: Constants.DEFAULT_FONT_COLOR
  },  
  starImage:  {
    color: Constants.STAR_RATING_COLOR,
  },
  starImageIsActive:  {
    color: Constants.STAR_RATING_COLOR_ACTIVE,
  },
  businessHoursContainer: {
    marginTop: 30,
    marginBottom: 100
  },
  businessHoursText:  {
    marginBottom: 20,
    fontSize: 20
  },  
  listItem: {
    flexDirection: 'row',
    marginBottom: 15
  },
  listItemlabel:  {
    flex: 1,
    color: Constants.DEFAULT_FONT_COLOR,
  },
  listItemValue:  {
    flex: 1,
    color: Constants.DEFAULT_FONT_COLOR,
  }
});

export default styles;