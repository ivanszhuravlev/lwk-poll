import {Context, useContext} from 'react';
import {Dimensions} from 'react-native';
import baseStyled, {
  ThemeContext as BaseThemeContext,
  ReactNativeStyledInterface,
} from 'styled-components/native';
import {getThemeColors} from './colors';

export const THEME = {
  colors: getThemeColors(),
  constants: {
    statusBarHeight: 44,
    deviceWidth: Dimensions.get('window').width,
  },
  borderRadius: {
    group: 18,
    block: 15,
    pic: 13,
    max: 100,
    interactable: 12,
    input: 10,
    card: 25,
  },
  offset: {
    huge: 25,
    big: 20,
    medium: 15,
    medium2: 18,
    small: 12,
    smallest: 10,
    tiny: 8,
    tiniest: 7,
  },
  fonts: {
    medium: 'Poppins-Medium',
    regular: 'Poppins-Regular',
    bold: 'Poppins-SemiBold',
  },
  fontSize: {
    tiny: 10,
    small: 12,
    medium: 14,
    text: 15,
    title: 16,
  },
};

export type ITheme = typeof THEME;
export const styled = (baseStyled as unknown) as ReactNativeStyledInterface<ITheme>;
export const useTheme = () => {
  return useContext(BaseThemeContext as Context<ITheme>);
};
