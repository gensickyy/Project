import {StyleSheet} from 'react-native';
import profile from './style/profile';
import login from './style/login';
import tabBar from './style/tabBar';
import feeds from './style/feeds';
import theme from './theme';

const general = StyleSheet.create({
  h1: {
    fontWeight: '600',
    fontSize: 26,
    color: theme.COLORS.WHITE,
    textAlign: 'center',
    marginBottom: 16,
  },
  h2: {
    fontWeight: '600',
    fontSize: 18,
    color: theme.COLORS.WHITE,
    textAlign: 'center',
    marginBottom: 8,
  },
  safeAreaView: {
    backgroundColor: theme.COLORS.MAIN,
  },
  main: {
    height: '100%',
    backgroundColor: theme.COLORS.MAIN_LIGHT,
  },
  mainDark: {
    height: '100%',
    backgroundColor: theme.COLORS.MAIN,
  },
  button: {
    backgroundColor: theme.COLORS.BUTTON,
    height: theme.SIZES.height.button,
    width: '100%',
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 14,
    color: theme.COLORS.BUTTON_TEXT,
  },
  avatarContainer: {
    width: theme.SIZES.width.avatar,
    height: theme.SIZES.height.avatar,
    position: 'relative',
  },
  avatar: {
    backgroundColor: theme.COLORS.AVATAR,
    width: '100%',
    height: '100%',
    borderRadius: theme.SIZES.width.avatar / 2,
    position: 'relative',
  },
  emptyScreen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default {
  ...general,
  ...profile,
  ...login,
  ...tabBar,
  ...feeds,
};
