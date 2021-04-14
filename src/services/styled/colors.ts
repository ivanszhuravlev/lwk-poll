import {Appearance, StatusBarStyle} from 'react-native';

export interface IColors {
  main1: string;
  main2: string;
  text: string;
  textGreyed: string;
}

const COLORS_LIGHT: IColors = {
  main1: '#1C1A2A',
  main2: '#14131B',
  text: '#FEFEFE',
  textGreyed: '#7E7A9A',
};

const COLORS_DARK: IColors = {
  main1: '#1C1A2A',
  main2: '#14131B',
  text: '#FEFEFE',
  textGreyed: '#7E7A9A',
};

const getIsDarkTheme = () => Appearance.getColorScheme() === 'dark';

export const getThemeColors = () =>
  getIsDarkTheme() ? COLORS_DARK : COLORS_LIGHT;

export const getStatusBarStyle = (): StatusBarStyle => {
  // TO ADD AFTER PROPERLY HANDLING THEMES
  // return getIsDarkTheme() ? 'light-content' : 'dark-content';

  return 'light-content';
};
