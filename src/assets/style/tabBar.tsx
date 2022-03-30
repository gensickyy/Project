import {Dimensions, StyleSheet} from 'react-native';
import theme from '../theme';
const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    top: 0,
    width,
    height: theme.SIZES.height.header,
    backgroundColor: theme.COLORS.BOTTOM_TAB,
  },
  tabBar: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
});
