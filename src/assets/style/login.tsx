import {StyleSheet} from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
  login: {
    padding: 16,
    justifyContent: 'center',
  },
  loginForm: {
    width: '100%',
    alignItems: 'center',
  },
  loginInput: {
    padding: 15,
    width: '100%',
    fontSize: 17,
    fontWeight: '600',
    backgroundColor: theme.COLORS.MAIN,
    color: theme.COLORS.WHITE,
    borderRadius: 12,
    marginBottom: 12,
  },
  loginError: {
    fontSize: 19,
    fontWeight: '400',
    color: theme.COLORS.ERROR,
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: theme.COLORS.LOGIN_BUTTON,
    borderRadius: 12,
    marginBottom: 12,
  },
  loginText: {
    fontSize: 17,
    fontWeight: '600',
    color: theme.COLORS.WHITE,
  },
});
