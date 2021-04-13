import {ImageProps, Image as ImageNative} from 'react-native';

interface Props extends ImageProps {
  uri: string;
}

export const Image = ({uri, ...props}: Props) => {
  const source = {uri};

  return <ImageNative source={source} {...props} />;
};
