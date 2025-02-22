import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  createFlexStyles,
  createShadowStyles,
  createPositionStyle,
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
  getThemeColor,
} from '../../theme/theme.service';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: any) => {
  const computedStyle: any = {};

  computedStyle.div = {
    flexDirection: props.row ? 'row' : props.flexDirection,
    flexWrap: props.flexWrap,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    height: props.height,
    width: props.width,
    minWidth: props.minWidth,
    minHeight: props.minHeight,
    alignSelf: props.alignSelf,
    maxWidth: props.maxWidth,
    maxHeight: props.maxHeight,
    opacity: props.opacity,
    overflow: props.overflow,
    zIndex: props.zIndex,
    borderStyle: props.borderStyle,
    backgroundColor: getThemeColor(theme.colors, props.bg),
    ...createFlexStyles(props),
    ...createPositionStyle(props),
    ...createShadowStyles(props, theme),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.image = {
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.div = {
      ...computedStyle.div,
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
