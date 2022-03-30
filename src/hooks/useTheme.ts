import {useContext} from 'react';
import ThemeContext from '../contexts/ThemeContext';
import type {ThemeContextValue} from '../contexts/ThemeContext';

const useTheme = (): ThemeContextValue => useContext(ThemeContext);

export default useTheme;
