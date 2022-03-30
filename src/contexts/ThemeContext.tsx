import React, {FC, useCallback, useEffect} from 'react';
import {createContext, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {THEMES} from '../constants';

export interface ThemeContextValue {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: THEMES.DARK,
  setTheme: () => {},
});

export const ThemeProvider: FC = props => {
  const {children} = props;
  const [currentTheme, setCurrentTheme] = useState<string>(THEMES.DARK);
  const handleSetTheme = useCallback(
    (theme: string): void => {
      setTheme(theme).then(() => {
        setCurrentTheme(theme);
      });
    },
    [setCurrentTheme],
  );

  useEffect(() => {
    getTheme().then(theme => {
      handleSetTheme(theme);
    });
  }, [handleSetTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        setTheme: handleSetTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

const getTheme = async () => {
  try {
    const theme = await AsyncStorage.getItem('theme');
    return theme ? theme : THEMES.LIGHT;
  } catch (error) {
    return THEMES.LIGHT;
  }
};

const setTheme = async (theme: string) => {
  try {
    await AsyncStorage.setItem('theme', theme);
  } catch (error) {}
};

export default ThemeContext;
