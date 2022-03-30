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

  const onLoginWithPasswordPress = useCallback(() => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!email) {
      setError('Enter Email');
    } else if (!password) {
      setError('Enter Password');
    } else if (!reg.test(email)) {
      setError('Email is Not Correct');
    } else {
      setError('');
      setEmail('');
      setPassword('');
      onLogin({
        email,
        password,
      });
    }
  }, [onLogin, email, password]);

  return (
    <View style={styles.loginForm}>
      {error ? <Text style={styles.loginError}>{error}</Text> : null}
      <TextInput
        style={styles.loginInput}
        value={email}
        placeholder="Email"
        placeholderTextColor="#8a8a8a"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.loginInput}
        value={password}
        placeholder="Password"
        placeholderTextColor="#8a8a8a"
        onChangeText={setPassword}
      />
      <Button
        style={styles.loginButton}
        textStyle={styles.loginText}
        onPress={onLoginWithPasswordPress}
        label="Login"
      />
    </View>
  );
};

export default LoginForm;
