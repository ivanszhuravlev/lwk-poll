import React from 'react';
import {styled} from '../../services/styled/styled';
import {Image, ImageProps} from './Image';

export const Pic = (props: ImageProps) => {
  return <StyledImage {...props} />;
};

const StyledImage = styled(Image)`
  border-radius: ${({theme}) => theme.borderRadius.pic}px;
  width: 40px;
  height: 40px;
`;
