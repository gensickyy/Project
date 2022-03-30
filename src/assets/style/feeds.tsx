import {StyleSheet} from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
  feed: {
    paddingHorizontal: 16,
    paddingTop: theme.SIZES.height.header,
  },
  feedItem: {
    width: '100%',
    height: 400,
    borderRadius: 30,
    backgroundColor: theme.COLORS.AVATAR,
    marginTop: 16,
  },
});
