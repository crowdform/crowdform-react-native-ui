import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  createShadowStyles,
  createSpacingStyles,
  createPositionStyle,
  createBorderRadiusStyles,
  createBorderColorStyles,
  createBorderWidthStyles,
  getThemeColor,
} from '../../theme/theme.service';
import { ImageProps } from './image.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: ImageProps) => {
  const computedStyle: any = {};

  computedStyle.image = {
    flex: props.flex,
    height: props.h,
    width: props.w,
    minHeight: props.minHeight,
    minWidth: props.minHeight,
    maxWidth: props.maxWidth,
    maxHeight: props.maxHeight,
    position: props.position,
    zIndex: props.zIndex,
    alignSelf: props.alignSelf,
    ...createPositionStyle(props),
    ...createBorderWidthStyles(props),
    ...createShadowStyles(props, theme),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    backgroundColor: getThemeColor(theme.colors, props.bg),
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.image = {
      ...computedStyle.image,
      // @ts-ignore
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
