import React, {FC, useCallback} from 'react';
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

interface Props {
  login: (data: ILogin) => Promise<ResponseJson>;
  navigation: any;
}

const Login: FC<Props> = props => {
  const {login, navigation} = props;
  const {theme} = useTheme();
  const mainStyle = theme === THEMES.LIGHT ? styles.main : styles.mainDark;
  const onPressLogin = useCallback(
    (data: ILogin) => {
      login(data).then(() => {
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
