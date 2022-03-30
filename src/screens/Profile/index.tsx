import React, {FC, useCallback} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {User} from '../../static/models/User';
import {Store} from '../../redux/reducers';
import {Dispatch} from 'redux';
import {logoutUser} from '../../redux/actions/authActions';
import styles from '../../assets/styles';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import useTheme from '../../hooks/useTheme';
import {THEMES} from '../../constants';

interface Props {
  user: User;
  navigation: any;
  logout: () => void;
}

const Profile: FC<Props> = props => {
  const {user, logout, navigation} = props;
  const {theme, setTheme} = useTheme();
  const mainStyle = theme === THEMES.LIGHT ? styles.main : styles.mainDark;

  const onClickLogout = useCallback(async () => {
    logout();
    navigation.navigate('Login');
  }, [logout, navigation]);

  const handleTheme = useCallback(() => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  }, [theme, setTheme]);
  return (
    <View style={[mainStyle, styles.profile]}>
      <View style={styles.profileAvatarContainer}>
        <Avatar uri={user.avatar} style={styles.profileAvatar} />
      </View>
      <Text style={styles.h1}>
        {user.first_name} {user.last_name}
      </Text>
      <Text style={styles.h2}>{user.email}</Text>
      <Button
        onPress={handleTheme}
        style={styles.profileThemeButton}
        label="Change Theme"
      />
      <Button onPress={onClickLogout} label="Logout" />
    </View>
  );
};

const mapStateToProps = (store: Store) => ({
  user: store.auth.user,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
