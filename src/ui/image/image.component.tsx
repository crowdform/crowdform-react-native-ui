import * as React from 'react';
import { Image as RNImage } from 'react-native';

import { getStyle } from './image.style';
import { ImageProps } from './image.type';
import { useTheme } from '../../theme';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Image: React.FunctionComponent<ImageProps> = (incomingProps) => {
  const props = useDefaultProps('Image', incomingProps, {});

  const {
    height,
    width,
    m,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    ms,
    p,
    paddingRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    minHeight,
    minWidth,
    maxHeight,
    maxWidth,
    style,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    borderEndWidth,
    flex,
    shadow,
    shadowColor,
    position,
    top,
    right,
    bottom,
    left,
    zIndex,
    opacity,
    alignSelf,
    ...rest
  } = props;
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);

  return <RNImage style={computedStyle.image} {...rest} />;
};

// Image.defaultProps = {};

export { Image };
