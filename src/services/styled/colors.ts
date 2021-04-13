import {Appearance} from 'react-native';

export interface IColors {
  main1: string;
  main2: string;
}

const COLORS_LIGHT: IColors = {
  main1: '#1C1A2A',
  main2: '#14131B',
};

const COLORS_DARK: IColors = {
  main1: '#1C1A2A',
  main2: '#14131B',
};

const getIsDarkTheme = () => Appearance.getColorScheme() === 'dark';

export const getThemeColors = () =>
  getIsDarkTheme() ? COLORS_DARK : COLORS_LIGHT;
