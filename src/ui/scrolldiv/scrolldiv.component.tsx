import * as React from 'react';
import {
  ScrollView as RNScrollView,
  ImageBackground as RNImageBackground,
} from 'react-native';

import { ScrollDivProps } from './scrolldiv.type';
import { getStyle } from './scrolldiv.style';
import { useTheme } from '../../theme';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const ScrollDiv: React.FunctionComponent<ScrollDivProps> = (incomingProps) => {
  const props = useDefaultProps('ScrollDiv', incomingProps, {
    bg: 'transparent',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    borderRadius: 'none',
    shadow: 0,
    shadowColor: 'gray900',
    position: 'relative',
    bgMode: 'cover',
  });

  const {
    height,
    width,
    m,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    p,
    paddingRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    minHeight,
    minWidth,
    position,
    style,
    flexDirection,
    borderRadius,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    children,
    bgImg,
    bgMode,
    alignItems,
    justifyContent,
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
    flexWrap,
    shadow,
    shadowColor,
    ...rest
  } = props;
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);

  if (bgImg) {
    return (
      <RNImageBackground
        source={bgImg}
        style={computedStyle.div}
        resizeMode={props.bgMode}
        imageStyle={computedStyle.image}
      >
        {children}
      </RNImageBackground>
    );
  }

  return (
    <RNScrollView style={computedStyle.div} {...rest}>
      {children}
    </RNScrollView>
  );
};

// ScrollDiv.defaultProps = {
//   bg: 'transparent',
//   flexDirection: 'column',
//   flexWrap: 'nowrap',
//   borderRadius: 'none',
//   shadow: 0,
//   shadowColor: 'gray900',
//   position: 'relative',
//   bgMode: 'cover',
// };

export { ScrollDiv };
