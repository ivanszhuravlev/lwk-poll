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
  blueLightTransparent1: string;
  blueLightTransparent2: string;
  blueLightAlpha: string;
  white: string;
  purpleGradient: string;
  purpleSoftGradient: string;
  purpleLightGradient: string;
  blueGreyGradient: string;
  purple: string;
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
  blueLightTransparent1: '#1C6EF200',
  blueLightTransparent2: '#1C6EF226',
  blueLightAlpha: '#1C6EF21A',
  white: '#FFFFFF',
  purpleGradient: '#A83D7F',
  purpleSoftGradient: '#6F1D7A81',
  purpleLightGradient: '#4C097734',
  blueGreyGradient: '#03114398',
  purple: '#AC1393',
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
  blueLightTransparent1: '#1C6EF200',
  blueLightTransparent2: '#1C6EF226',
  blueLightAlpha: '#1C6EF21A',
  white: '#FFFFFF',
  purpleGradient: '#A83D7F',
  purpleSoftGradient: '#6F1D7A81',
  purpleLightGradient: '#4C097734',
  blueGreyGradient: '#03114398',
  purple: '#AC1393',
};

const getIsDarkTheme = () => Appearance.getColorScheme() === 'dark';

export const getThemeColors = () =>
  getIsDarkTheme() ? COLORS_DARK : COLORS_LIGHT;

export const getStatusBarStyle = (): StatusBarStyle => {
  // TO ADD AFTER PROPERLY HANDLING THEMES
  // return getIsDarkTheme() ? 'light-content' : 'dark-content';

  return 'light-content';
};
