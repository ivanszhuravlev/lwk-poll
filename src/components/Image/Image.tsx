import React from 'react';
import {
  ImageProps as ImageNativeProps,
  Image as ImageNative,
} from 'react-native';

export interface ImageProps extends Omit<ImageNativeProps, 'source'> {
  uri: string;
}

export const Image = ({uri, ...props}: ImageProps) => {
  const source = {uri};

  return <ImageNative source={source} {...props} />;
};
