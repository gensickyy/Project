import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import store from './redux/store';
import Screens from './navigation/Screens';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import styles from './assets/styles';
import {ThemeProvider} from './contexts/ThemeContext';

const App = () => {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.safeAreaView}>
          <StatusBar barStyle="light-content" />
          <ThemeProvider>
            <Screens />
          </ThemeProvider>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
