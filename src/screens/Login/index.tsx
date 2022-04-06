import React, {FC, useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import styles from '../../assets/styles';
import {ResponseJson} from '../../static/models/ReduceAction';
import LoginForm from '../../components/LoginForm';
import {loginFetch} from '../../redux/actions/authActions';
import {Login as ILogin} from '../../static/models/User';
import {THEMES} from '../../constants';
import useTheme from '../../hooks/useTheme';
import AsyncStorage from '@react-native-community/async-storage';

// interface Props {
//   login: (data: ILogin) => Promise<ResponseJson>;
//   navigation: any;
// }

const Login: FC<Props> = props => {
  const {login, navigation} = props;
  const {theme} = useTheme();
  const mainStyle = theme === THEMES.LIGHT ? styles.main : styles.mainDark;
  useEffect(() => {
      getLogin().then(value => {
        if (value) {
          navigation.navigate('Home');
          //TODDO: CHANGE
        }
      });
    }, [navigation]);

  const onPressLogin = useCallback(
    (data: ILogin) => {
      login(data).then(() => {
        setLogin('yes')
        navigation.navigate('Home');
      });
    },
    [login, navigation],
  );
  return (
    <View style={[mainStyle, styles.login]}>
      <LoginForm onLogin={onPressLogin} />
    </View>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (data: ILogin) => loginFetch(dispatch, data),
});
export default connect(null, mapDispatchToProps)(Login);

const getLogin = async () => {
  try {
    const login = await AsyncStorage.getItem('login');
    return login === 'yes' ? true : false;
  } catch (error) {
    return false;
  }
};
const setLogin = async (login: string) => {
  try {
    await AsyncStorage.setItem('login', login);
  } catch (error) {}
};
