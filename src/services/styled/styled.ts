import {Context, useContext} from 'react';
import baseStyled, {
  ThemeContext as BaseThemeContext,
  ReactNativeStyledInterface,
} from 'styled-components/native';
import {getThemeColors} from './colors';

export const THEME = {
  colors: getThemeColors(),
  borderRadius: {
    group: 18,
    block: 15,
    pic: 13,
    max: 100,
    interactable: 12,
  },
  offset: {
    huge: 25,
    big: 20,
    medium: 15,
    small: 12,
    smallest: 10,
    tiny: 8,
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
