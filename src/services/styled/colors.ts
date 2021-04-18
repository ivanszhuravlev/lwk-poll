import {Appearance, StatusBarStyle} from 'react-native';

export interface IColors {
  main1: string;
  main2: string;
  secondary: string;
  text: string;
  textGreyed: string;
  blueGradient: string;
  main2Transparent: string;
  blueLight: string;
  blueLightTransparent: string;
  blueLightAlpha: string;
  white: string;
}

const COLORS_LIGHT: IColors = {
  main1: '#1C1A2A',
  main2: '#14131B',
  secondary: '#2E2C3C',
  text: '#FEFEFE',
  textGreyed: '#7E7A9A',
  blueGradient: '#2467F41F',
  main2Transparent: '#14131B00',
  blueLight: '#1C6EF2',
  blueLightTransparent: '#1C6EF200',
  blueLightAlpha: '#1C6EF21A',
  white: '#FFFFFF',
};

const COLORS_DARK: IColors = {
  main1: '#1C1A2A',
  main2: '#14131B',
  secondary: '#2E2C3C',
  text: '#FEFEFE',
  textGreyed: '#7E7A9A',
  blueGradient: '#2467F41F',
  main2Transparent: '#14131B00',
  blueLight: '#1C6EF2',
  blueLightTransparent: '#1C6EF200',
  blueLightAlpha: '#1C6EF21A',
  white: '#FFFFFF',
};

const getIsDarkTheme = () => Appearance.getColorScheme() === 'dark';

export const getThemeColors = () =>
  getIsDarkTheme() ? COLORS_DARK : COLORS_LIGHT;

export const getStatusBarStyle = (): StatusBarStyle => {
  // TO ADD AFTER PROPERLY HANDLING THEMES
  // return getIsDarkTheme() ? 'light-content' : 'dark-content';

  return 'light-content';
};
