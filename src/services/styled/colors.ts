import {Appearance} from 'react-native';

export interface IColors {}

const COLORS_LIGHT: IColors = {};

const COLORS_DARK: IColors = {};

const getIsDarkTheme = () => Appearance.getColorScheme() === 'dark';

export const getThemeColors = () =>
  getIsDarkTheme() ? COLORS_DARK : COLORS_LIGHT;
