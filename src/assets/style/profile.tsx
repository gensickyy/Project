import {StyleSheet} from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
  profile: {
    paddingHorizontal: 16,
    paddingTop: theme.SIZES.height.header + 16,
  },
  profileAvatarContainer: {
    alignItems: 'center',
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileThemeButton: {
    marginVertical: 16,
  },
});
