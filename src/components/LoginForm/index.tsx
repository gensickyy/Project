import React, {FC, useCallback, useState} from 'react';
import styles from '../../assets/styles';
import {View, Text, TextInput} from 'react-native';
import Button from '../Button';
import {Login} from '../../static/models/User';

interface Props {
  onLogin: (data: Login) => void;
}

const LoginForm: FC<Props> = props => {
  const {onLogin} = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const onLoginPress = useCallback(() => {
    if (!email) {
      setError('Enter Email');
    } else if (!password) {
      setError('Enter Password');
    }  else {
      setError('');
      setEmail('');
      setPassword('');
      onLogin({
        email,
        password,
      });
    }
  }, [onLogin, email, password]);

  const onSetEmail = useCallback(value => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!reg.test(value)) {
      setError('Email is Not Correct');
    } else {
      setError('');
    }
    setEmail(value);
  }, []);

  const onSetPassword = useCallback(value => {
      if (value.length < 8) {
        setError('Password lenght min 8 chars');
      } else {
        setError('');
      }
      setPassword(value);
    }, []);

  return (
    <View style={styles.loginForm}>
      {error ? <Text style={styles.loginError}>{error}</Text> : null}
      <TextInput
        style={styles.loginInput}
        value={email}
        placeholder="Email"
        placeholderTextColor="#8a8a8a"
        onChangeText={onSetEmail}
      />
      <TextInput
        style={styles.loginInput}
        value={password}
        placeholder="Password"
        placeholderTextColor="#8a8a8a"
        onChangeText={onSetPassword}
      />
      <Button
        style={styles.loginButton}
        textStyle={styles.loginText}
        onPress={onLoginPress}
        label="Login"
      />
    </View>
  );
};

export default LoginForm;
